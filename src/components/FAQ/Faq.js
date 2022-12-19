import { useState } from "react";
import Link from "next/link";
import Accordion from "./FAQUtils/Accordion";
import Navigation from "./FAQUtils/Navigation";
import { DISCORD_SUPPORT_CHANNEL_INVITE_LINK } from "../../config/constants";
import { About_Musixverse, Musixverse_NFTs, General_Platform_Features, community } from "./FAQUtils/FaqData";

export default function Faq() {
	const [currentSelection, setCurrentSelection] = useState(0);

	const categories = ["About Musixverse", "Musixverse NFTs", "General Platform Features", "Community"];
	const accordionData = [About_Musixverse, Musixverse_NFTs, General_Platform_Features, community];

	return (
		<div className="w-full space-y-16">
			<div className="space-y-4 text-center">
				<span className="text-5xl font-semibold font-primary text-primary-500">FAQs</span>
				<div className="text-sm">
					<p>Please find answers to frequently asked questions here.</p>
					<p>
						Visit our&nbsp;
						<Link href="/help-center" passHref>
							<a className="text-primary-600">
								Help Center
							</a>
						</Link>
						&nbsp;for more information, or head over to the&nbsp;
						<a href={DISCORD_SUPPORT_CHANNEL_INVITE_LINK} className="text-primary-600" target="_blank" rel="noopener noreferrer">
							Support
						</a>
						&nbsp;channel on discord and ask your question there.
					</p>
				</div>
			</div>

			<div className="flex flex-col w-full space-y-12 pb-28 lg:flex-row lg:space-x-12 lg:space-y-0">
				<Navigation currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} categories={categories} />
				<Accordion category={categories[currentSelection]} data={accordionData[currentSelection]} />
			</div>
		</div>
	);
}
