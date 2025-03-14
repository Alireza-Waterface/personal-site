import sql from 'better-sqlite3';

import crypto from 'crypto';

const db = sql('database.db');

class URLShortener {
	constructor() {
		this.urlMap = new Map();
		this.chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	}

	hashUrl(url) {
		let hash = 0;
		for (let i = 0; i < url.length; i++) {
			hash = (hash * 31 + url.charCodeAt(i)) % 1000000007;
		}
		return hash;
	}

	encodeBase62(num) {
		let shortUrl = "";
		while (num > 0) {
			shortUrl = this.chars[num % 62] + shortUrl;
			num = Math.floor(num / 62);
		}
		return shortUrl.padStart(6, this.chars[0]);
	}

	shorten(url, category = "free") {
		const length = category === "paid" ? 4 : 6;
		let hash = crypto.createHash('sha256').update(url + Date.now()).digest('hex');
		let shortKey = this.encodeBase62(parseInt(hash.substring(0, 10), 16)).slice(0, length);
		this.urlMap.set(shortKey, url);
		return shortKey;
	}
}

const shortener = new URLShortener();

export async function getLinks() {
	return db.prepare('SELECT * FROM links').all();
}

export async function saveLink(data) {
	const shortenedURL = shortener.shorten(data.originalURL, data.category);

	const link = {
		originalURL: data.originalURL,
		shortURL: shortenedURL,
		clicks: 0,
		state: 'active',
		user_id: +data.user_id,
		title: data.title,
		expire: data.expire,
		category: data.category,
	};	

	db.prepare(`
		INSERT INTO links (originalURL, shortURL, clicks, state, user_id, title, expire, category)
		VALUES (
			@originalURL,
			@shortURL,
			@clicks,
			@state,
			@user_id,
			@title,
			@expire,
			@category
		)
	`).run(link);

	return shortenedURL;
}

export async function getLinksByUser(user_id) {
	return db.prepare('SELECT * FROM links WHERE user_id = ?').all(user_id);
}

export async function getLink(shortURL = '') {
	return db.prepare('SELECT * FROM links WHERE shortURL = ?').get(shortURL);
}

export async function expand(shortKey) {
	const link = await getLink(shortKey);

	if(!link) return null;

	// check if expired
	if (new Date(link.expire) < new Date()) {
		return {
			error: 'expired',
			message: 'لینک منقضی شده است'
		};
  	}

	// increment clicks
	db.prepare('UPDATE links SET clicks = clicks + 1 WHERE shortURL = ?').run(shortKey);

	return link.originalURL;
}