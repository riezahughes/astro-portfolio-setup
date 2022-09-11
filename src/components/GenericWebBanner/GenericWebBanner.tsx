import type { IGenericWebBanner } from "./types";
import styles from "./styles.module.css";

const GenericWebBanner = ({ style, buttonStyle, backgroundImage, mainText, buttonText }: IGenericWebBanner) => {
	console.log(backgroundImage);
	return (
		<main className={styles.container} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
			{/* <button style={{ ...styles, ...style }} type="button">
				{buttonText}
			</button> */}
		</main>
	);
};

export default GenericWebBanner;
