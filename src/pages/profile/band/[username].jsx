import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../../constants";

export async function getStaticProps(context) {
	const { username } = context.params;
	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

	// Fetch token details
	const _profileDetails = await Moralis.Cloud.run("fetchBandProfileDetails", { username: username });

	if (!_profileDetails) {
		return {
			redirect: {
				destination: `/profile/does-not-exist?username=${username}`,
				permanent: false,
			},
		};
	}
	const profileDetails = JSON.parse(JSON.stringify(_profileDetails));
	console.log(profileDetails);

	// Passing data to the page using props
	return {
		props: { profileDetails },
		revalidate: 1,
	};
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function Profile({ profileDetails }) {
	const router = useRouter();

	return <></>;
}
