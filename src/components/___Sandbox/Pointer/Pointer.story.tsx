import Pointer from "./Pointer";
import { Variant } from "@vitebook/preact";

const PointerStory = () => {
	const onEnterVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};

	const onExitVariant = (variant: Record<string, unknown>) => {
		console.log(variant);
	};
	return (
		<>
			<Variant name="Default" description="The default settings." onEnter={onEnterVariant} onExit={onExitVariant}>
				<Pointer text="Hire Me!" size="small" />
			</Variant>
		</>
	);
};

export default PointerStory;
