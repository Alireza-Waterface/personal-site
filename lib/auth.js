import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
	user: 'users',
	session: 'sessions',
});

const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		}
	}
});

export async function createAuthSession(userID) {
	const session = await lucia.createSession(userID, {});
	const sessionCookie = lucia.createSessionCookie(session.id);

	(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export async function verfityAuth() {
	const sessionCookie = (await cookies()).get(lucia.sessionCookieName);

	if(!sessionCookie) {
		return {
			user: null,
			session: null,
		};
	}

	const sessionID = sessionCookie.value;

	if(!sessionID) {
		return {
			user: null,
			session: null,
		};
	}

	const result = await lucia.validateSession(sessionID);

	try {
		if(result.session && result.session.fresh) {
			const sessionCookie = lucia.createSessionCookie(result.session.id);
			(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}

		if(!result.session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
	} catch {}

	return result;
}

export async function destroySession() {
	const { session } = await verfityAuth();

	if(!session) {
		return {
			error: 'Unauthorized!',
		}
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}