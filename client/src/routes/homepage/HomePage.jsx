// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
	const [typingStatus, setTypingStatus] = useState("human1");

	return (
		<div className="homepage">
			<img src="/orbital.png" className="orbital" alt="" />
			<div className="left">
				<h1>NIO</h1>
				<h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
					nesciunt accusantium perferendis
				</h3>
				<Link to="/dashboard">Get Started</Link>
			</div>
			<div className="right">
				<div className="imgContainer">
					<div className="bgContainer">
						<div className="bg"></div>
					</div>
					<img src="/bot.png" className="bot" alt="" />
					<div className="chat">
						<img
							src={
								typingStatus === "human1"
									? "/human1.jpeg"
									: typingStatus === "human2"
									? "human2.jpeg"
									: "bot.png"
							}
							alt=""
						/>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"What's cookin' good lookin'?",
								2000,
								() => {
									setTypingStatus("bot");
								},
								"NIO: blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
								1000,
								() => {
									setTypingStatus("human2");
								},
								"Why does it smell like updog in here?",
								2000,
								() => {
									setTypingStatus("bot");
								},
								"NIO: blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
								1000,
								() => {
									setTypingStatus("human1");
								},
							]}
							wrapper="span"
							cursor={true}
							repeat={Infinity}
							omitDeletionAnimation={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
