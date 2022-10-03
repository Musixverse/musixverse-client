import Link from "next/link";


export default function ReadSection(){
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-center text-3xl">Recommended Reads</h1>
            <div className="grid grid-cols-3 gap-5 mt-10 justify-items-center">
                <div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer shadow hover:shadow-xl duration-300">
                    <Link href="/blog/1">How do I open a Musixverse account?</Link>
                </div>
                <div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer shadow hover:shadow-xl duration-300">
                    <Link href="blog/2">What crypto wallets can I use with Musixverse?</Link>
                </div>
                <div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer shadow hover:shadow-xl duration-300">
                    <Link href="blog/3">How do I sell an NFT?</Link>
                </div>
                <div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer shadow hover:shadow-xl duration-300">
                    <Link href="blog/4">How do I create an NFT?</Link>
                </div>
                <div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer shadow hover:shadow-xl duration-300">
                    <Link href="blog/5">How can I buy MATIC to transact on Musixverse?</Link>
                </div>
            </div>
        </div>
    )
}