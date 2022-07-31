import { useState, useEffect, useRef } from "react";
import { useMoralis } from "react-moralis";

const PersonaVerification = ({ isOpen = "", onClose = "", personaInquiryIdData }) => {
	const { user } = useMoralis();

	const [isModalOpen, setIsModalOpen] = useState(isOpen);
	const embeddedClientRef = useRef(null);

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
			templateId: personaInquiryIdData && personaInquiryIdData.personaInquiryId ? null : process.env.NEXT_PUBLIC_PERSONA_TEMPLATE_ID,
			environment: process.env.NEXT_PUBLIC_PERSONA_ENVIRONMENT,
			inquiryId: personaInquiryIdData && personaInquiryIdData.personaInquiryId ? personaInquiryIdData.personaInquiryId : null,
			referenceId: user.id,
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
			},
			onError: (status, code) => console.error("Error:", code),
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
					closeModal();
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
