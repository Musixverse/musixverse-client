import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { meta_description } from "../../config/constants";
import CustomButton from "../../layout/CustomButton";
import { useMoralis } from "react-moralis";

const VerifyEmailSuccess = () => {
	const router = useRouter();
	const { username } = router.query;
	const { user } = useMoralis();

	return (
		<>
			<Head>
				<title>Musixverse | Email Verified Successfully</title>
				<meta name="description" content={meta_description} />
			</Head>

			<main className="flex flex-col items-center justify-center px-4 md:px-20 pt-24 pb-40 text-center bg-light-200 dark:bg-dark-800">
				<h1 className="md:text-6xl text-5xl font-primary font-semibold mb-2 pt-20">Musixverse</h1>
				<p className="md:text-md text-sm">
					<i>Hear it. Own it. Live it.</i>
				</p>

				<div className="w-full max-w-[40rem] flex flex-col items-center justify-center mt-16 py-16 px-4 bg-white dark:bg-dark-600 rounded-lg ">
					<h1 className="text-3xl font-primary font-semibold text-primary-500">Email Verified Successfully</h1>
					<p className="font-secondary text-[15px] text-center mt-32">Please close this tab and return to the previous window</p>
					<p className="font-secondary text-[14px] text-center mt-4">or</p>

					{user && user.attributes.isArtist ? (
						<div className="flex sm:flex-row flex-col items-center justify-center gap-8 mt-6">
							<Link href={`/profile/verify`} passHref>
								<div>
									<CustomButton type="button" green={true} classes="text-md px-8 py-3 font-primary font-semibold">
										Verify Profile
										<span className="ml-6 text-md">
											<i className="fa-solid fa-arrow-right-long"></i>
										</span>
									</CustomButton>
								</div>
							</Link>
						</div>
					) : (
						<div className="flex sm:flex-row flex-col items-center justify-center gap-8 mt-6">
							<Link href={`/profile/${username}`} passHref>
								<div>
									<CustomButton type="button" light200={true} classes="text-md px-8 py-3 font-primary font-semibold">
										View Profile
									</CustomButton>
								</div>
							</Link>
							<Link href={`/mxcatalog/new-releases`} passHref>
								<div>
									<CustomButton type="button" green={true} classes="text-md px-8 py-3 font-primary font-semibold">
										Go to Mx Catalog
										<span className="ml-6 text-md">
											<i className="fa-solid fa-arrow-right-long"></i>
										</span>
									</CustomButton>
								</div>
							</Link>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default VerifyEmailSuccess;
