import Confetti from "react-confetti";

export default function SuccessConfetti() {
	return (
		<div className="absolute top-0 left-0 w-screen h-screen m-auto">
			<div className="fixed" style={{ zIndex: "55" }}>
				<Confetti
					colors={[
						"#79CA25",
						"#5AB510",
						"#479E00",
						"#1E7F2D",
						"#7AB510",
						"#5AB510",
						"#479E00",
						"#1E7F2D",
						"#79CA25",
						"#5AB510",
						"#79CA25",
						"#1E7F2D",
						"#7AB510",
						"#5AB510",
						"#79CA25",
						"#1E7F2D",
					]}
					initialVelocityY={1600}
					numberOfPieces={1000}
					friction={0.99}
					gravity={0.4}
				/>
			</div>
		</div>
	);
}
