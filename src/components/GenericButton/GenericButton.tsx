import type { IGenericButton } from "./types";
import styles from "./styles.module.css";

const GenericButton = ({ style, text }: IGenericButton) => {
	return (
		<button style={{ ...styles, ...style }} type="button">
			{text}
		</button>
	);
};

export default GenericButton;
