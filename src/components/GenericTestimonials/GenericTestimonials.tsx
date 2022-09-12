import type { IGenericTestimonial } from "./types";
const GenericTestimonials = ({ content }: IGenericTestimonial) => {
	return (
		<div>
			{content.map((msg) => {
				return (
					<>
						<h5>{msg.title}</h5>
						<p>{msg.message}</p>
					</>
				);
			})}
		</div>
	);
};

export default GenericTestimonials;
