import NextAuth from "next-auth";
import { MoralisNextAuthProvider } from "@moralisweb3/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Moralis from "moralis/node";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../../../config/constants";

export default NextAuth({
	// providers: [MoralisNextAuthProvider()],
	providers: [
		CredentialsProvider({
			name: "MoralisAuth",
			credentials: {
				message: {
					label: "Message",
					type: "text",
					placeholder: "0x0",
				},
				signature: {
					label: "Signature",
					type: "text",
					placeholder: "0x0",
				},
			},
			async authorize(credentials) {
				try {
					// "message" and "signature" are needed for authorization
					// we described them in "credentials" above
					const { message, signature } = credentials;
					console.log("message:", message);
					console.log("signature:", signature);

					// await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });
					const user = await Moralis.Cloud.run("validateAuth", { message: message, signature: signature });
					console.log(user);
					// returning the user object and creating  a session
					return user;
				} catch (e) {
					console.error(e);
					return null;
				}
			},
		}),
	],
	// adding user info to the user session object
	callbacks: {
		async jwt({ token, user, maxAge }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
	session: {
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 60 * 24 * 60 * 60, // 30 days

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
		updateAge: 24 * 60 * 60, // 24 hours
	},
});
