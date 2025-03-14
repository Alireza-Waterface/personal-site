import db from "./db";

export function registerCode(createdAt, user_id, expiresAt) {
	const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

	const result = db.prepare('INSERT INTO codes (createdAt, user_id, code, expiresAt) VALUES (?, ?, ?, ?)')
		.run(createdAt, user_id, verificationCode, expiresAt);

	return result.lastInsertRowid;
}

export function getCodeByID(id) {
	return db.prepare('SELECT * FROM codes WHERE id = ?').get(id);
}

export function changeCodeState(used, id) {
	return db.prepare('UPDATE codes SET used = ? WHERE id = ?').run(used, id);
}