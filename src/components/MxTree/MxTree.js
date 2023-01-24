import React from "react";
import Header from "./Header";
import LinkList from "./LinkList";
import Footer from "./Footer";

const MxTree = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Profile Pic and Title Header*/}
			<Header />
			{/* List of Links generated from links.json */}
			<LinkList />
			{/* Social Links and Footer Disclaimer/Credits */}
			<Footer />
		</div>
	);
};

export default MxTree;
