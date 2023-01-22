import Modal from "@/layout/Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/layout/CustomButton";

export default function ShareAssetImageModal({isOpen, setOpen, assetImage}){
    const downloadImage = (base64Image) => {
        const link = document.createElement("a");
        link.href = base64Image;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    return(
        <Modal
			isOpen={isOpen}
			image={
				<div className="relative flex items-center justify-center w-full mx-auto h-80">
					<Image src={assetImage} layout="fill" objectFit="contain" alt="Success" />
				</div>
			}
			title={
				<div className="text-2xl">
					Share and earn <span className="text-4xl text-primary-500">10%</span>
					<p className="text-xs">of the transaction fee whenever someone</p>
					<p className="text-xs">
						purchases this NFT using your link.&nbsp;
						<Link href="/faq" passHref>
							<a className="hover:underline hover:text-primary-500">Learn more</a>
						</Link>
					</p>
				</div>
			}
			content={
				<div>
                    <div className="flex items-center justify-center w-full">
                        <CustomButton
                            type="button"
                            onClick={() => {
                                downloadImage(assetImage);
                                setOpen(false);
                            }}
                            green={true}
                            classes="text-sm px-8 py-3"
                        >
                            Download asset <i className="ml-3 fas fa-download"></i>
                        </CustomButton>
                    </div>
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
    );
}