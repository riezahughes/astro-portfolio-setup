import { useState } from "react";
import type { IWebsiteTagline } from "./types";
import Styles from "./styles.module.css";

const WebsiteTagline = ({ start = "google.com", choices = ["images", "news"] }: IWebsiteTagline) => {
	const [choiceCount, setChoiceCount] = useState(0);
	return (
		<>
			<h1>
				<span className={Styles.start}>{start}</span>/<span className={Styles.choice}>{choices[choiceCount]}</span>
			</h1>
		</>
	);
};

export default WebsiteTagline;
