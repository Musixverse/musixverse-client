import { useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import uploadMusic from "../../../../public/assets/create-nft/upload-music.svg";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";

export default function AudioUpload({ audioFileUrl, setAudioFileUrl, setAudioFileDuration, setAudioFileMimeType }) {
	const { Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);

	const handleAudioUpload = async (event) => {
		setLoading(true);
		var target = event.target;
		var fileToUpload = event.target.files[0];

		var audio = document.createElement("audio");
		if (target.files && fileToUpload) {
			var reader = new FileReader();
			reader.onload = function (e) {
				audio.src = e.target.result;
				audio.addEventListener(
					"loadedmetadata",
					function () {
						// Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
						var duration = audio.duration;
						setAudioFileDuration(duration.toFixed(2));
						setAudioFileMimeType(fileToUpload.type);
					},
					false
				);
			};
			reader.readAsDataURL(fileToUpload);

			const formData = new FormData();
			formData.append("ethAddress", Moralis.User.current().attributes.ethAddress);
			formData.append("fileType", "audio");
			formData.append("file", event.target.files[0]);
			try {
				await uploadFileToIPFS(formData).then((url) => setAudioFileUrl(url));
			} catch (err) {
				if (err.message && err.message == "request entity too large") {
					setError({
						title: "File too large",
						message: "Please select a file with smaller size",
						showErrorBox: true,
					});
				} else {
					setError((prevState) => ({
						...prevState,
						title: "Oops! Something went wrong.",
						message: "Please try again later.",
						showErrorBox: true,
					}));
				}
			}
		}
		setLoading(false);
	};

	return (
		<>
			<input accept="audio/*" type="file" onChange={handleAudioUpload} className="hidden" id="uploadedNftAudio" name="audioFile" />
			<label
				className={
					"flex items-center w-full p-2 space-x-5 rounded-lg cursor-pointer dark:bg-[#2a2a2a] bg-light-100 hover:border-[#6cc027] border-2 border-light-100 dark:border-[#2a2a2a] hover:dark:border-[#6cc027]"
				}
				htmlFor="uploadedNftAudio"
			>
				<div
					className={
						"flex relative items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300 dark:bg-[#1d1d1d] border-2 " +
						(audioFileUrl === null ? "border-light-300 dark:border-dark-600" : "border-primary-600 dark:border-primary-600")
					}
				>
					<Image src={uploadMusic} objectFit="contain" alt="upload image art digital illustration"></Image>
					<div className={audioFileUrl === null ? "hidden" : "absolute bottom-2 right-1 bg-light-200 rounded-full h-[20px]"}>
						<i className={"text-xl text-primary-600 fas fa-check-circle"}></i>
					</div>
				</div>
				<div className="flex-1 font-secondary">
					<h3 className="font-semibold">UPLOAD AUDIO FILE</h3>
					{audioFileUrl === null ? (
						<p className="text-xs">Any Audio file | Max file size: 500 MB</p>
					) : (
						<p className="text-sm text-primary-600">Track Uploaded</p>
					)}
				</div>
			</label>
		</>
	);
}
