import { render } from "@testing-library/react";
import ComputerCodeLine from "./ComputerCodeLine";

describe("Testing custom component and husky", () => {
	it("can at the very least render the component", () => {
		const { getByRole } = render(<ComputerCodeLine user="dan@test" path="~123/" words="npm install" />);
		expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("dan@test");
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("~123/");
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("npm install");
	});
});
