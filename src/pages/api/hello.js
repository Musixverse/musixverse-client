export default function handler(req, res) {
	res.status(200).json({
		name: "Nikhil Kumar Singh",
	});
	console.log("Webhook called");
}
