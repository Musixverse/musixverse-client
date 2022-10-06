import Link from "next/link";
import CustomButton from "../../layout/CustomButton";

export default function ArtistDashboard() {
	return (
		<div className="flex-1 p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
			<div className="flex flex-col items-start justify-between w-full space-y-5 md:flex-row md:space-y-0">
				<div className="flex flex-col space-y-8">
					<h1 className="text-4xl font-tertiary">DASHBOARD</h1>

					<div className="font-secondary mb-14">
						<b>Are you part of a band and want to create a band profile?</b>

						<Link href="/create-band" passHref>
							<div>
								<CustomButton green={true} classes="text-sm px-6 py-2 mt-4">
									Create Band Profile
									<span className="ml-8 text-xl">
										<i className="fa-solid fa-arrow-right-long"></i>
									</span>
								</CustomButton>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
