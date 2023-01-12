import { getSession, signOut } from "next-auth/react";

// gets a prop from getServerSideProps
function User({ user }) {
	return (
		<div>
			<h4>User session:</h4>
			<pre className="mt-10">{JSON.stringify(user, null, 2)}</pre>
			<button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	console.log("session:", session);

	// redirect if not authenticated
	// if (!session) {
	// 	return {
	// 		redirect: {
	// 			destination: "/",
	// 			permanent: false,
	// 		},
	// 	};
	// }

	return {
		props: { user: session.user },
	};
}

export default User;
