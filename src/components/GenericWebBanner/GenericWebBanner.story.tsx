import GenericWebBanner from "./GenericWebBanner";
import { Variant } from "@vitebook/preact";

import backgroundImage from "@public/images/home-image.webp";

const GenericWebBannerStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	return (
		<>
			<Variant name="White" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<GenericWebBanner
					text="Login"
					style={{ backgroundColor: "#FFFFFF", color: "black" }}
					styleButton={{}}
					backgroundImage={backgroundImage}
				/>
			</Variant>
			<Variant name="Blue" description="In blue" onEnter={onEnterVariant} onExit={onExitVariant}>
				<GenericWebBanner text="Sign Up" style={{ backgroundColor: "#0000FF", color: "black" }} />
			</Variant>
		</>
	);
};

export default GenericWebBannerStory;
