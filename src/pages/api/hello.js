export default function handler(req, res) {
	res.status(200).json({
		name: "Shivam x Sparsh",
	});
	console.log("Webhook called");
}
