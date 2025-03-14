import sql from 'better-sqlite3';

const db = sql('database.db');

db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT UNIQUE NOT NULL,
		password TEXT NOT NULL,
		name TEXT NOT NULL,
		state TEXT DEFAULT 'unverified' NOT NULL
	);
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS sessions (
		id TEXT NOT NULL PRIMARY KEY,
		expires_at INTEGER NOT NULL,
		user_id INTEGER NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS links (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
		originalURL TEXT NOT NULL,
		shortURL TEXT UNIQUE NOT NULL,
		clicks INTEGER DEFAULT 0 NOT NULL,
		state TEXT DEFAULT 'active' NOT NULL,
		expire TIMESTAMP NOT NULL,
		title TEXT NOT NULL,
		user_id INTEGER NOT NULL,
		category TEXT NOT NULL CHECK(category IN ('free', 'paid')),
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS codes	(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
		user_id INTEGER NOT NULL,
		code TEXT UNIQUE NOT NULL,
		expiresAt TIMESTAMP NOT NULL,
		used BOOLEAN DEFAULT false NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)
`);

export default db;