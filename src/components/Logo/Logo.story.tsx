import Logo from "./Logo";
import { Variant } from "@vitebook/preact";

const LogoStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	return (
		<>
			<Variant name="White" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<Logo fillColour="#FFFFFF" />
			</Variant>
			<Variant name="Blue" description="In blue" onEnter={onEnterVariant} onExit={onExitVariant}>
				<Logo fillColour="#0000FF" />
			</Variant>
		</>
	);
};

export default LogoStory;
