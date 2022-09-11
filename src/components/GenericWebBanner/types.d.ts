export interface IGenericWebBanner {
	style?: React.CSSProperties;
	buttonStyle?: React.CSSProperties;
	backgroundImage: {
		src: string;
		width: number;
		height: number;
		format: string;
	};
	mainText?: string;
	buttonText?: string;
}
