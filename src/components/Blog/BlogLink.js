import React from "react";

const BlogLink = ({ children,link }) => {
	return <div className="text-base inline-block underline font-primary tracking-[0.4px] leading-[26px]">
		<a href={link}>{children}</a>
	</div>;
};

export default BlogLink;
