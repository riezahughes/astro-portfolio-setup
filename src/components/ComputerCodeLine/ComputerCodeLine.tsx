import type { IComputerCodeLine } from "./types";
import { keyframes, css } from "@emotion/css";

const flashingUnderscore = keyframes`
    0% { opacity: 0 };
    95% { opacity:  1 };
    100% { opacity: 0 };
`;

const ComputerCodeLine = ({ words = "example" }: IComputerCodeLine) => {
	return (
		<>
			<h1>
				&gt;{words}
				<span
					className={css`
						animation: ${flashingUnderscore} 1s infinite;
					`}
				>
					_
				</span>
			</h1>
		</>
	);
};

export default ComputerCodeLine;
