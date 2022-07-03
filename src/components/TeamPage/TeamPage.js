import React, { Fragment } from "react";
import "./teamPage.css";

export default function TeamPage() {
	var membersArray = [
		{
			imgUrl: "https://ca.slack-edge.com/T029UBMRHT4-U029MK102JJ-a735b7fc1b87-512",
			name: "Pushpit Bhardwaj",
			position: "Chief Executive Officer",
			role: "Lead Developer",
			socialLinks: {
				twitter: "https://twitter.com/Pushpit07",
				linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj/",
				github: "https://github.com/Pushpit07",
			},
			description:
				"Pushpit has had a wide variety of experiences from working at various startups, where he developed softwares and lead teams. He is a strong proponent of blockchain technology and believes this technology is going to play an important role in shaping the companies of the future. At Musixverse, Pushpit is responsible for maintaining branding, business development, talent sourcing, and smart contract development. When Pushpit isn’t developing, he’s catching up on the crypto space and avidly hitting the gym.",
		},
		{
			imgUrl: "https://ca.slack-edge.com/T029UBMRHT4-U029V1TSLEN-ce5b2bba58e7-512",
			name: "Yuvraj Chandra",
			position: "Chief Operating Officer",
			role: "Product Manager",
			socialLinks: {
				twitter: "https://twitter.com/Yuvi2103/",
				linkedin: "https://www.linkedin.com/in/yuvrajchandra/",
				github: "https://github.com/Yuvrajchandra",
			},
			description: `Yuvraj is a hardcore programmer who loves to solve problems with code and content. He is the intersection of Tech, Programming, UX, Blockchain, and Product Management. At Musixverse, Yuvraj is responsible for planning, developing, marketing, and continuous improvement of the product. His ultimate goal is to make sure the team is "building the right product and building the product right".`,
		},
		{
			imgUrl: "https://ca.slack-edge.com/T029UBMRHT4-U02DBKU2P62-243d61190bb4-512",
			name: "Sparsh Sharma",
			position: "Chief Technology Officer",
			role: "Lead Frontend Engineer",
			socialLinks: {
				twitter: "https://twitter.com/Sparsh_2510",
				linkedin: "https://linkedin.com/in/sparsharma",
				github: "https://github.com/sparshsharma2510",
			},
			description:
				"Sparsh is a passionate developer who loves to break and build things. For Musixverse he is inclined towards developing the front-end of the platform. At the core, he is a problem solver and loves tinkering with different web development technologies. He usually talks in Java and sometimes in JavaScript. He also has a special place in his heart for Astrophysics, and he spends his leisure time vibing to Lo-fi music or stargazing.",
		},
		{
			imgUrl: "https://ca.slack-edge.com/T029UBMRHT4-U02ACPZ8HU1-9cfe2d202ced-512",
			name: "Shivam Singh",
			position: "Chief Creative Officer",
			role: "Lead Graphics Designer",
			socialLinks: {
				twitter: "https://twitter.com/Shivamc504",
				linkedin: "https://www.linkedin.com/in/shivam-singh-bb9bb818a/",
				github: "https://github.com/Shivamsingh-c17",
			},
			description: `Shivam is an aesthetic designer who uses the power of design to create stunning graphics. You can find him exploring the breaths and depths of the design world. He handles everything related to design at Musixverse "MXV". Shivam has the ability to fight each and every problem through his creative designs. Innovative and creative are the two words that describe him best.`,
		},
		{
			imgUrl: "https://ca.slack-edge.com/T029UBMRHT4-U029EA24RE3-b62b417050a2-512",
			name: "Ayush Gupta",
			position: "Chief Information Officer",
			role: "Core Developer",
			socialLinks: {
				twitter: "https://twitter.com/AyushGu68644268?t=3coInw3KN0FFz85sEvOo1Q&s=08",
				linkedin: "https://www.linkedin.com/in/ayush-gupta-274445200",
				github: "https://github.com/ayushgupta0110",
			},
			description: `Ayush is a PRO developer who loves to convert designs into codes. He has been practicing Frontend Development for the last few years by developing mini-projects and has developed a good grasp over ReactJS too. Ayush also loves to get his hands dirty on various domains of the Computer Science world. At Musixverse, you can find him either killing bugs or developing new features for the platform.`,
		},
	];

	const showModal = (event) => {
		var detailModal = document.getElementById("detailModal");

		// Extract info from data-bs-* attributes
		const memberName = event.target.getAttribute("data-bs-member-name");
		const memberPosition = event.target.getAttribute("data-bs-member-position");
		const memberRole = event.target.getAttribute("data-bs-member-role");
		const imgUrl = event.target.getAttribute("data-bs-img-url");
		const description = event.target.getAttribute("data-bs-description");
		const twitterLink = event.target.getAttribute("data-bs-twitter-link");
		const linkedinLink = event.target.getAttribute("data-bs-linkedin-link");
		const githubLink = event.target.getAttribute("data-bs-github-link");

		// Update the modal's content.
		var modalMemberName = detailModal.querySelector(".modal_member_name");
		modalMemberName.textContent = memberName;

		var modalMemberPosition = detailModal.querySelector(".modal_member_position");
		modalMemberPosition.textContent = memberPosition;

		var modalMemberRole = detailModal.querySelector(".modal_member_role");
		modalMemberRole.textContent = "(" + memberRole + ")";

		var modalMemberImage = detailModal.querySelector(".modal_member_image");
		modalMemberImage.src = imgUrl;

		var modalMemberDescription = detailModal.querySelector(".modal_member_description");
		modalMemberDescription.textContent = description;

		var modalMemberTwitter = detailModal.querySelector(".modal_member_twitter");
		modalMemberTwitter.href = twitterLink;

		var modalMemberLinkedin = detailModal.querySelector(".modal_member_linkedin");
		modalMemberLinkedin.href = linkedinLink;

		var modalMemberGithub = detailModal.querySelector(".modal_member_github");
		modalMemberGithub.href = githubLink;
	};

	const dontShowModal = () => {
		var myModal = document.getElementById("detailModal");
		myModal.classList.remove("in");
		document.querySelector(".modal-backdrop").remove();
		document.body.style.paddingRight = "";
		myModal.style.display = "none";
		document.querySelector(".member_card").click();
	};

	return (
		<Fragment>
			<div className="team_page_container">
				<div className="team_page_box">
					<div className="row justify-content-center text-center">
						<h1 className="team_page_header">Meet our Team.</h1>
					</div>

					<div className="row justify-content-center align-items-center">
						{membersArray.map((member, key) => {
							return (
								<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center mt-5" key={key}>
									<div
										className="card member_card mt-4"
										onClick={(e) => showModal(e)}
										data-bs-toggle="modal"
										data-bs-target="#detailModal"
										data-bs-member-name={member.name}
										data-bs-member-position={member.position}
										data-bs-member-role={member.role}
										data-bs-img-url={member.imgUrl}
										data-bs-description={member.description}
										data-bs-twitter-link={member.socialLinks.twitter}
										data-bs-linkedin-link={member.socialLinks.linkedin}
										data-bs-github-link={member.socialLinks.github}
									>
										<img
											src={member.imgUrl}
											alt="..."
											data-bs-member-name={member.name}
											data-bs-member-position={member.position}
											data-bs-member-role={member.role}
											data-bs-img-url={member.imgUrl}
											data-bs-description={member.description}
											data-bs-twitter-link={member.socialLinks.twitter}
											data-bs-linkedin-link={member.socialLinks.linkedin}
											data-bs-github-link={member.socialLinks.github}
										/>

										<p
											className="member_name mt-4"
											data-bs-member-name={member.name}
											data-bs-member-position={member.position}
											data-bs-member-role={member.role}
											data-bs-img-url={member.imgUrl}
											data-bs-description={member.description}
											data-bs-twitter-link={member.socialLinks.twitter}
											data-bs-linkedin-link={member.socialLinks.linkedin}
											data-bs-github-link={member.socialLinks.github}
										>
											{member.name}
										</p>
										<p
											className="member_position"
											data-bs-member-name={member.name}
											data-bs-member-position={member.position}
											data-bs-member-role={member.role}
											data-bs-img-url={member.imgUrl}
											data-bs-description={member.description}
											data-bs-twitter-link={member.socialLinks.twitter}
											data-bs-linkedin-link={member.socialLinks.linkedin}
											data-bs-github-link={member.socialLinks.github}
										>
											{member.position}
										</p>
										<p
											className="member_role mt-1"
											data-bs-member-name={member.name}
											data-bs-member-position={member.position}
											data-bs-member-role={member.role}
											data-bs-img-url={member.imgUrl}
											data-bs-description={member.description}
											data-bs-twitter-link={member.socialLinks.twitter}
											data-bs-linkedin-link={member.socialLinks.linkedin}
											data-bs-github-link={member.socialLinks.github}
										>
											({member.role})
										</p>

										<div
											className="d-flex justify-content-evenly member_social_link mt-3"
											data-bs-member-name={member.name}
											data-bs-member-position={member.position}
											data-bs-member-role={member.role}
											data-bs-img-url={member.imgUrl}
											data-bs-description={member.description}
											data-bs-twitter-link={member.socialLinks.twitter}
											data-bs-linkedin-link={member.socialLinks.linkedin}
											data-bs-github-link={member.socialLinks.github}
										>
											<a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" onClick={dontShowModal}>
												<i className="fa fa-twitter" aria-hidden="true"></i>
											</a>
											<a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" onClick={dontShowModal}>
												<i className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
											<a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" onClick={dontShowModal}>
												<i className="fa fa-github" aria-hidden="true"></i>
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="modal in" id="detailModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row modal_header">
								<div className="col-4 d-flex justify-content-center align-items-center">
									<img className="modal_member_image" src="" alt="..." />
								</div>
								<div className="col modal_header_details">
									<div className="row modal_member_name px-3 fw-bold"></div>
									<div className="row modal_member_position mt-2 px-3"></div>
									<div className="row modal_member_role mt-1 px-3"></div>
									<div className="d-flex flex-row member_social_link mt-2">
										<a className="modal_member_twitter" href="#/" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-twitter me-4" aria-hidden="true"></i>
										</a>
										<a className="modal_member_linkedin me-4" href="#/" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a className="modal_member_github me-4" href="#/" target="_blank" rel="noopener noreferrer">
											<i className="fa fa-github" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="modal_member_description mt-md-3 mt-sm-2"></div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}