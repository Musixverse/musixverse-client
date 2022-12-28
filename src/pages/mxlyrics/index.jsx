import Head from "next/head";
import { meta_description } from "../../config/constants";
import { useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import AuthModalContext from "../../../store/authModal-context";
import CustomButton from "../../layout/CustomButton";
import styles from "../../../styles/MxLyrics/MxLyrics.module.css";

const MxLyrics = () => {
	const { user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);

	const [choice, setChoice] = useState("generateLyrics");
	const [userInput, setUserInput] = useState("");
	const [apiOutput, setApiOutput] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);

	const callGenerateEndpoint = async () => {
		if (user) {
			setIsGenerating(true);

			const response = await fetch("/api/mxlyrics/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userInput }),
			});
			const data = await response.json();
			const { output } = data;

			setApiOutput(`${output.text}`);
			setIsGenerating(false);
		} else {
			setAuthModalOpen(true);
		}
	};

	const callAutocompleteEndpoint = async () => {
		if (user) {
			setIsGenerating(true);

			const response = await fetch("/api/mxlyrics/autocomplete", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userInput }),
			});

			const data = await response.json();
			const { output } = data;

			setApiOutput(`${output.text}`);
			setIsGenerating(false);
		} else {
			setAuthModalOpen(true);
		}
	};

	return (
		<>
			<Head>
				<title>Musixverse | MxLyrics</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="flex items-center justify-center bg-light-200 dark:bg-dark-1000">
				<div className="lg:flex-row flex-col flex w-full max-w-[1920px] pb-40 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<div className="w-full gap-x-48 lg:h-screen overflow-scroll no-scrollbar flex flex-col md:flex-row items-center justify-center m-0 p-0">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								if (choice === "generateLyrics") {
									callGenerateEndpoint();
								} else {
									callAutocompleteEndpoint();
								}
							}}
							className="lg:mt-0 mt-40"
						>
							<p className="sm:text-[105px] text-[70px] text-center font-bold -tracking-2">
								M<span className="text-primary-400 text-[55px] sm:text-[90px]">x</span> L
								<span className="text-[55px] sm:text-[90px]">yrics</span>
							</p>
							<h1 className="text-lg md:text-xl text-center font-semibold -mt-2">say goodbye to creative blocks</h1>

							<div className="mt-16 flex justify-between text-xs sm:text-sm">
								<span
									className={
										"sm:px-8 sm:py-3 px-4 py-2 bg-primary-100 dark:bg-dark-800 rounded-full cursor-pointer border " +
										(choice == "generateLyrics" ? "border-primary-400" : "border-transparent")
									}
									onClick={() => {
										if (choice === "autocompleteLyrics") {
											setUserInput("");
										}
										setChoice("generateLyrics");
									}}
								>
									Generate Lyrics
								</span>
								<span
									className={
										"sm:px-8 sm:py-3 px-4 py-2 bg-primary-100 dark:bg-dark-800 rounded-full cursor-pointer border " +
										(choice == "autocompleteLyrics" ? "border-primary-400" : "border-transparent")
									}
									onClick={() => {
										if (choice === "generateLyrics") {
											setUserInput("");
										}
										setChoice("autocompleteLyrics");
									}}
								>
									Autocomplete Lyrics
								</span>
							</div>

							<div className="mt-10 flex flex-col justify-center items-center">
								<div className="text-[11px] sm:text-lg text-zinc-400">let us help you fastrack your music creation process</div>
								{choice == "generateLyrics" ? (
									<>
										<textarea
											rows={1}
											className="mt-2 sm:mt-4 w-full flex gap-4 items-start justify-start placeholder-light-600 dark:placeholder-light-800 bg-light-300/50 dark:bg-dark-600 border border-transparent dark:border-dark-300 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 rounded-xl overflow-hidden px-5 py-4 resize-none"
											placeholder="enter song name"
											value={userInput}
											onChange={(event) => setUserInput(event.target.value)}
											required
										/>
										<CustomButton
											type="submit"
											disabled={isGenerating}
											green={true}
											classes={"mt-8 text-md px-10 py-3 rounded-full shrink-0 transform-none"}
										>
											{isGenerating ? <span className={styles["loader"]}></span> : "Generate"}
										</CustomButton>
									</>
								) : (
									<>
										<textarea
											rows={8}
											className="mt-2 sm:mt-4 w-full flex gap-4 items-start justify-start placeholder-light-600 dark:placeholder-light-800 bg-light-300/50 dark:bg-dark-600 border border-transparent dark:border-dark-300 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 rounded-xl overflow-hidden px-5 py-4 resize-none"
											placeholder="enter your lyrics"
											value={userInput}
											onChange={(event) => setUserInput(event.target.value)}
											required
										/>
										<CustomButton
											type="submit"
											disabled={isGenerating}
											green={true}
											classes={"mt-8 text-md px-10 py-3 rounded-full shrink-0 transform-none"}
										>
											{isGenerating ? <span className={styles["loader"]}></span> : "Autocomplete"}
										</CustomButton>
									</>
								)}
							</div>
						</form>

						{apiOutput && (
							<div className="mt-40 lg:mt-80 flex flex-col justify-center items-center">
								<div className="flex font-tertiary text-5xl">
									<h3>Output</h3>
								</div>

								<div className="mt-4 flex flex-col justify-start shrink-0 transform-none">
									<p className="text-center whitespace-pre text-dark-400 dark:text-zinc-400">{apiOutput}</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MxLyrics;
