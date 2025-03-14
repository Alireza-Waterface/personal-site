import db from "./db";

export function createUser(email, password, name) {
	const result = db
		.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)')
		.run(email, password, name);

	return result.lastInsertRowid;
}

export function getUserByEmail(email) {
	return db.prepare('SELECT * FROM users WHERE email = ?')
		.get(email);
}

export function getUserByID(id) {
	return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

export function updateUserState(state, id) {
	return db.prepare('UPDATE users SET state = ? WHERE id = ?').run(state, id);
}
