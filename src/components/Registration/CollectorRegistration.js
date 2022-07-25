import { useState, useRef, useContext } from "react";
import RightSection from "./ArtistRegUtils/RightSection";
import styles from "../../../styles/Registration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
import SelectAvatar from "./ArtistRegUtils/SelectAvatar";
import Router from "next/router";
import { useMoralis, useNewMoralisObject, useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../store/status-context";

export default function CollectorRegistration() {
	const [, , , setError] = useContext(StatusContext);
	const { Moralis, userError, user, setUserData } = useMoralis();
	const { save: saveUserInfo } = useNewMoralisObject("UserInfo");
	const { save: saveUserPreferences } = useNewMoralisObject("UserPreferences");

	const [avatar, setAvatar] = useState(
		"https://lh3.googleusercontent.com/MA0m87sfDmKHswPN39ycJkOUMS9C2wLqF5jz3SRpA8ij_V2Z-o3iPnViH1bT8_QISKwnCYSIO5ngL_85H60bpE9R6mogFuMjumBfB3w=s0"
	);

	const nameRef = useRef(null);
	const usernameRef = useRef(null);
	const emailRef = useRef(null);

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	const { fetch: checkUsernameAvailability } = useMoralisCloudFunction("checkUsernameAvailability", { username: username }, { autoFetch: false });
	const { fetch: checkEmailExists } = useMoralisCloudFunction("checkEmailExists", { email: email }, { autoFetch: false });

	async function uploadFile(data) {
		const file = new Moralis.File("file", data);
		await file.saveIPFS();
		return file;
	}

	const handleCollectorDetailsSave = async (e) => {
		e.preventDefault();

		// USERNAME CHECKS
		const usernameRegex = /^\w+$/;
		if (username.length < 2) {
			setError({
				title: "Invalid credentials!",
				message: "Username length should be greater than 1",
				showErrorBox: true,
			});
			usernameRef.current.focus();
			return;
		} else if (!usernameRegex.test(username)) {
			setError({
				title: "Invalid credentials!",
				message: "Username can only contain alphabets, numbers, and '_'",
				showErrorBox: true,
			});
			usernameRef.current.focus();
			return;
		}

		// EMAIL CHECKS
		const emailRegex = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		if (!emailRegex.test(email)) {
			setError({
				title: "Invalid credentials!",
				message: "Please enter a valid email",
				showErrorBox: true,
			});
			emailRef.current.focus();
			return;
		}

		let usernameExists = false;
		await checkUsernameAvailability({
			onSuccess: async (object) => {
				console.log("object", object, user);
				if (object) {
					setError({
						title: object,
						message: "Please choose another username.",
						showErrorBox: true,
					});
					usernameExists = true;
				}
			},
			onError: (error) => {
				console.log("checkUsernameAvailability Error:", error);
			},
		});
		if (usernameExists) return;

		let emailExists = false;
		await checkEmailExists({
			onSuccess: async (object) => {
				if (object) {
					setError({
						title: object,
						message: "Please sign up using another email address.",
						showErrorBox: true,
					});
					emailExists = true;
				}
			},
			onError: (error) => {
				console.log("checkEmailExists Error:", error);
			},
		});
		if (emailExists) return;

		if (name !== "" && username !== "" && email !== "") {
			await setUserData({
				name: name === "" ? undefined : name,
				username: username === "" ? undefined : username,
				email: email === "" ? undefined : email,
			});

			const userData = {
				user: user,
				userId: user.id,
				avatar: avatar,
				coverImage: "https://ipfs.moralis.io:2053/ipfs/QmSQ2s8TEKBAdZy3Pm6oy7CPDLZ7dEUQZJ89azN4a2AVUE",
				isArtist: false,
			};
			await saveUserInfo(userData, {
				onSuccess: (obj) => {
					// Execute any logic that should take place after the object is saved.
				},
				onError: (error) => {
					// Execute any logic that should take place if the save fails.
					// error is a Moralis.Error with an error code and message.
					setError((prevState) => ({
						...prevState,
						title: "Failed to save user information",
						message: JSON.stringify(error.message),
						showErrorBox: true,
					}));
					return;
				},
			});

			const userPreferences = {
				user: user,
				userId: user.id,
				newsletter: true,
				tradeNotifications: true,
			};
			await saveUserPreferences(userPreferences, {
				onSuccess: (obj) => {
					// Execute any logic that should take place after the object is saved.
				},
				onError: (error) => {
					setError((prevState) => ({
						...prevState,
						title: "Failed to save user information",
						message: JSON.stringify(error.message),
						showErrorBox: true,
					}));
					return;
				},
			});

			if (userError) {
				setError((prevState) => ({
					...prevState,
					title: "Invalid credentials!",
					message: JSON.stringify(userError.message),
					showErrorBox: true,
				}));
			} else {
				Router.push("/register/confirm-email", undefined, { shallow: true });
			}
		}
		return;
	};

	return (
		<div className={styles["register"]}>
			<div className={"dark:bg-dark-200 " + styles["register__container"]}>
				{/* Left section */}
				<div className="lg:max-w-[30vw] pb-6 lg:pb-0">
					<p className="mt-20 text-5xl font-tertiary max-w-[468px]">COLLECTOR SIGN UP</p>
					<p className="text-[15px] font-secondary mt-4 max-w-none lg:max-w-[650px]">
						Collectors bring Musixverse to life. As a collector, you will be able to explore, buy, and trade NFTs of your favorite artists.
						Musixverse will also provide you tools to establish unique connections with artists that you long for.
					</p>
					<p className="text-[15px] font-secondary mt-4">Thank you for choosing Musixverse!</p>
				</div>

				{/* Right section */}
				<RightSection>
					<p className="text-5xl font-tertiary max-w-[468px] mb-10">YOUR DETAILS</p>
					<form onSubmit={handleCollectorDetailsSave}>
						<SelectAvatar uploadFile={uploadFile} setAvatar={setAvatar} />

						<p className="mt-8 text-[16px] font-secondary font-bold">Your Name*</p>
						<input
							type="text"
							ref={nameRef}
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100"
							required
						/>

						<div className="flex mt-3 text-[16px] font-secondary font-bold space-x-3">
							<div className="flex-1">
								<p>Username*</p>
								<input
									type="text"
									ref={usernameRef}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100"
								/>
							</div>
							<div className="flex-1">
								<p>Email Address*</p>
								<input
									type="email"
									ref={emailRef}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100"
								/>
							</div>
						</div>

						<div className="flex flex-col mt-8 lg:w-[468px]">
							<Button>Submit</Button>
						</div>
					</form>
				</RightSection>
			</div>
		</div>
	);
}
