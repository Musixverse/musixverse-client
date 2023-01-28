import React from "react";
import BlogProfile from "./BlogProfile";
import BlogHeader from "./BlogHeader";
import BlogImage from "./BlogImage";
import BlogSubHeading from "./BlogSubHeading";
import BlogContent from "./BlogContent";

const Blog = () => {
	return (
		<div className="py-36">
			<BlogProfile
				avatar={`https://ipfs.moralis.io:2053/ipfs/QmetsQ5gRrGb8vgySJPB1vNeaQVBMWbqhr4MJ9THg5rFyM`}
				username={`robert`}
				name={`Robert`}
				lastupdated={new Date().toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
			/>
			<BlogHeader>I&apos;M A COLLECTOR WHO BECAME A FAN</BlogHeader>
			<BlogContent>Collector Robert shares why he&apos;s betting big on the future of music</BlogContent>
			<BlogImage
				src={
					"https://images.unsplash.com/photo-1600779547877-be592ef5aad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
				}
				alt={"Robert"}
				width={768}
				height={500}
			/>
			<BlogContent>
				In the past, record companies, private equity firms, hedge funds, and wealthy individuals with strong connections have had the luxury of owning
				music rights. It is now possible for everyone to own music and get royalties. Musixverse gives musicians a chance to support their careers and
				maintain creative freedom while allowing fans to share in music ownership. Robert, a former producer residing in Los Angeles, found this notion
				appealing. As soon as he learned about Musixverse&apos;s purpose, he opened an account and purchased his first token this spring.
			</BlogContent>
			<BlogSubHeading>Investing in the future of music</BlogSubHeading>
			<BlogContent>
				Creating a world where artists and fans co-own music together immediately resonated with Daniel, and he decided to get involved. “Musixverse is
				helping music go back to the way it&apos;s supposed to be,” Robert said.
			</BlogContent>
			<BlogImage src={`/assets/CFB/section4.png`} alt={"Robert"} width={768} height={100} />
			<BlogContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				anim id est laborum.
			</BlogContent>
			<br />
			<BlogContent>
				Donec enim diam vulputate ut pharetra sit amet. Pulvinar elementum integer enim neque volutpat ac tincidunt. Commodo elit at imperdiet dui
				accumsan sit amet nulla. At varius vel pharetra vel turpis nunc eget lorem dolor. Mi ipsum faucibus vitae aliquet nec ullamcorper. Sit amet
				consectetur adipiscing elit ut. Massa massa ultricies mi quis hendrerit. Proin libero nunc consequat interdum varius sit. Ultrices sagittis orci
				a scelerisque purus semper. Nibh tortor id aliquet lectus. Turpis massa tincidunt dui ut ornare lectus sit amet. Consequat nisl vel pretium
				lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Mauris pharetra et ultrices neque ornare aenean. Elementum tempus
				egestas sed sed.
			</BlogContent>
			<BlogImage
				src={
					"https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
				}
				alt={"Robert"}
				width={768}
				height={500}
			/>
			<BlogContent>
				Tellus molestie nunc non blandit massa enim. Ut placerat orci nulla pellentesque dignissim enim sit. Et malesuada fames ac turpis egestas
				maecenas pharetra. Porttitor lacus luctus accumsan tortor posuere ac. Risus viverra adipiscing at in tellus integer. Suspendisse sed nisi lacus
				sed. Quam quisque id diam vel quam elementum pulvinar etiam non. Quis enim lobortis scelerisque fermentum dui faucibus in. Lorem ipsum dolor sit
				amet consectetur adipiscing elit pellentesque. Id venenatis a condimentum vitae. Nisi est sit amet facilisis magna. Phasellus egestas tellus
				rutrum tellus pellentesque eu tincidunt tortor. Suspendisse potenti nullam ac tortor vitae purus. Elit eget gravida cum sociis natoque penatibus
				et magnis dis. Feugiat in fermentum posuere urna nec. A pellentesque sit amet porttitor eget dolor morbi non arcu. Leo a diam sollicitudin
				tempor id eu nisl nunc.
			</BlogContent>

			<BlogImage src={`/assets/CFB/sectionD.png`} alt={"Robert"} width={768} height={150} />
			<BlogContent>
				“As one of Musixverse&apos;s first users, I&apos;m helping pioneer change in the music industry.”
				<br />
				<br />
				“When I saw the possibility of how this model could disrupt the industry, I decided to put my money where my mouth is,” Robert said.
			</BlogContent>
			<br />
			<BlogContent>
				“The music industry is something in dire need of change. I love that Musixverse is creating a safe space for artists and fans.” 💎
			</BlogContent>
		</div>
	);
};

export default Blog;
