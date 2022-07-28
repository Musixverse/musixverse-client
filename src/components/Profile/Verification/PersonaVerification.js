import { useState, useEffect, useRef } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import dynamic from "next/dynamic";
// const Persona = dynamic(() => import("persona"), { ssr: false });
// import Persona from "persona";

const PersonaVerification = ({ isOpen = "", onClose = "" }) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);
	const [personaInquiryId, setPersonaInquiryId] = useState(null);
	const [kycStatus, setKycStatus] = useState(null);
	const embeddedClientRef = useRef(null);

	const { fetch: setPersonaInquiryIdData } = useMoralisCloudFunction("setPersonaInquiryIdData", { inquiryId: personaInquiryId }, { autoFetch: false });
	const { data: artistPersonaInquiryId } = useMoralisCloudFunction("getPersonaInquiryId");
	const { fetch: setArtistVerified } = useMoralisCloudFunction("setArtistVerified", { status: kycStatus }, { autoFetch: false });

	useEffect(() => {
		const setInquiryIdData = async () => {
			await setPersonaInquiryIdData({
				onSuccess: (data) => {
					console.log("setPersonaInquiryId success");
				},
				onError: (error) => {
					console.log("setPersonaInquiryId Error:", error);
				},
			});
		};
		if (personaInquiryId) {
			setInquiryIdData();
		}
	}, [personaInquiryId, setPersonaInquiryIdData]);

	useEffect(() => {
		const setIsArtistVerified = async () => {
			await setArtistVerified({
				onSuccess: (data) => {
					console.log("setArtistVerified success");
				},
				onError: (error) => {
					console.log("setArtistVerified Error:", error);
				},
			});
		};
		if (kycStatus) {
			console.log(`Sending finishe`);
			setIsArtistVerified();
		}
	}, [kycStatus, setArtistVerified]);

	useEffect(() => {
		setIsModalOpen(isModalOpen);
	}, [isModalOpen]);

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	const closeModal = () => {
		setIsModalOpen(!isModalOpen);
		onClose();
	};

	const createClient = () => {
		const client = new Persona.Client({
			templateId: artistPersonaInquiryId ? null : "itmpl_3tUhatahnDKLS5djDurSAz2i",
			environment: "sandbox",
			inquiryId: artistPersonaInquiryId ?? null,
			frameWidth: "768px",
			fields: {
				address_country_code: "IN",
			},
			onLoad: (error) => {
				if (error) {
					console.error(`Failed with code: ${error.code} and message ${error.message}`);
				}
				client.open();
			},
			onCancel: ({ inquiryId, sessionToken }) => {
				closeModal();
				setPersonaInquiryId(inquiryId);
			},
			onError: (status, code) => console.log("Error:", code),
			onEvent: (name, meta) => {
				switch (name) {
					case "start":
						console.log(`Received event: start`);
						break;
					default:
						console.log(`Received event: ${name} with meta: ${JSON.stringify(meta)}`);
				}
			},
			onComplete: (inquiryId, status, fields) => {
				if (inquiryId.status == "completed") {
					console.log(`Sending finished inquiry ${JSON.stringify(inquiryId)} to backend: ${status}`);
					closeModal();
					setPersonaInquiryId(inquiryId.inquiryId);
					setKycStatus(inquiryId.status);
				}
			},
		});
		embeddedClientRef.current = client;

		window.exit = (force) => (client ? client.exit(force) : alert("Initialize client first"));
	};

	useEffect(() => {
		if (isOpen) {
			embeddedClientRef.current != null ? embeddedClientRef.current.open() : createClient();
		}
	});

	return <></>;
};

export default PersonaVerification;
