import { useState, useEffect } from "react";
import Modal from "../../../layout/Modal/Modal";

const LyricsModal = ({ isOpen, setOpen, lyricsUrl }) => {
	const [lyrics, setLyrics] = useState("");

	useEffect(() => {
		if (lyricsUrl) {
			const fetchLyrics = async () => {
				const res = await fetch(lyricsUrl.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL));
				const data = await res.text();
				setLyrics(data);
				return data;
			};
			fetchLyrics();
		}
	}, [lyricsUrl]);

	return (
		<Modal
			isOpen={isOpen}
			classes="max-w-[48rem]"
			title={<div className="flex ml-8">Lyrics</div>}
			titleClasses="justify-start text-start"
			content={<div className="text-start whitespace-pre-wrap max-h-[300px] overflow-y-scroll">{lyrics}</div>}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
	);
};

export default LyricsModal;
