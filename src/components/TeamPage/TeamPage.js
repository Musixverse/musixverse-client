import Card from "./Card";
import styles from "../../../styles/TeamPage/teampage.module.css";

export default function TeamPage() {
	var membersArray = [
		{
			imgUrl: "https://pbs.twimg.com/profile_images/1540681879707619328/PvJhMWwz_400x400.jpg",
			name: "Pushpit Bhardwaj",
			position: "Chief Executive Officer",
			role: "Lead Developer",
			socialLinks: {
				twitter: "https://twitter.com/Pushpit07",
				linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj/",
				github: "https://github.com/Pushpit07",
			},
			description:
				`Pushpit has had a wide variety of experiences from working at various startups, where he developed softwares and lead teams. He is a strong proponent of blockchain technology and believes this technology is going to play an important role in shaping the companies of the future. At Musixverse, Pushpit is responsible for maintaining branding, business development, talent sourcing, and smart contract development. When Pushpit isn’t developing, he’s catching up on the crypto space and avidly hitting the gym.`,
		},
		{
			imgUrl: "https://pbs.twimg.com/profile_images/1526874368948613120/8bvBlnVx_400x400.jpg",
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
			imgUrl: "https://pbs.twimg.com/profile_images/1474801439645913089/7Tpgb5Cn_400x400.jpg",
			name: "Sparsh Sharma",
			position: "Chief Technology Officer",
			role: "Lead Frontend Engineer",
			socialLinks: {
				twitter: "https://twitter.com/Sparsh_2510",
				linkedin: "https://linkedin.com/in/sparsharma",
				github: "https://github.com/sparshsharma2510",
			},
			description:
				`Sparsh is a passionate developer who loves to break and build things. For Musixverse he is inclined towards developing the front-end of the platform. At the core, he is a problem solver and loves tinkering with different web development technologies. He usually talks in Java and sometimes in JavaScript. He also has a special place in his heart for Astrophysics, and he spends his leisure time vibing to Lo-fi music or stargazing.`,
		},
		{
			imgUrl: "https://pbs.twimg.com/profile_images/1473511548039491584/udoH0U6p_400x400.jpg",
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
			imgUrl: "https://pbs.twimg.com/profile_images/1474035171590430724/O6Nk-Zxf_400x400.jpg",
			name: "Ayush Gupta",
			position: "Chief Information Officer",
			role: "Core Developer",
			socialLinks: {
				twitter: "https://twitter.com/AyushGu68644268?t=3coInw3KN0FFz85sEvOo1Q&s=08",
				linkedin: "https://www.linkedin.com/in/ayush-gupta-274445200",
				github: "https://github.com/ayushgupta0110",
			},
			description: `Ayush is a PRO developer who loves to convert designs into codes. He has been practicing Frontend Development for the last few years by developing mini-projects and has developed a good grasp over ReactJS too. Ayush also loves to get his hands dirty on various domains of the Computer Science world. At Musixverse, you can find him either killing bugs or developing new features for the platform.`,
		}
	];

	return (
		<div>
			<div className={styles["team_page_container"]}>
				<div className="text-base">
					<div className="justify-center text-center">
						<h1 className="font-secondary text-5xl text-primary-100">Meet our Team.</h1>
					</div>

					<div className="w-full mt-10 grid grid-cols-3 justify-items-center grid-rows-2 gap-10">
						{membersArray.map((member, key) => {
							return (
								<div key={key}>
									<Card 
										imgUrl={member.imgUrl}
										name={member.name}
										position={member.position}
										role={member.role}
										socialLinks={member.socialLinks}
										description={member.description}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>

		</div>	
	);
}