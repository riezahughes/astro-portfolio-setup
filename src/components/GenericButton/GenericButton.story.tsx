import GenericButton from "./GenericButton";
import { Variant } from "@vitebook/preact";

const GenericButtonStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	return (
		<>
			<Variant name="White" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<GenericButton text="Login" style={{ backgroundColor: "#FFFFFF", color: "black" }} />
			</Variant>
			<Variant name="Blue" description="In blue" onEnter={onEnterVariant} onExit={onExitVariant}>
				<GenericButton text="Sign Up" style={{ backgroundColor: "#0000FF", color: "black" }} />
			</Variant>
		</>
	);
};

export default GenericButtonStory;
