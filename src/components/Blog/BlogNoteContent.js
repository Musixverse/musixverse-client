import React from "react";

const BlogNoteContent = ({ children }) => {
	return <div className="text-base italic my-4 pl-4 border-l-dark-400 border-l-4 font-primary tracking-[0.4px] leading-[26px]">
		{children}
	</div>;
};

export default BlogNoteContent;
