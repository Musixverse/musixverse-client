import cookie from "cookie";

export default function handler(req, res) {
	res.setHeader(
		"Set-Cookie",
		cookie.serialize("currentUser", JSON.stringify(req.body.currentUser), {
			httpOnly: true,
			secure: process.env.NODE_ENV !== "development",
			maxAge: 60 * 60,
			sameSite: "strict",
			path: "/",
		})
	);
	res.status(200);
	res.json({ success: true });
}
