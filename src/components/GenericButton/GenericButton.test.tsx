import React from "react";
import { render } from "@testing-library/react";
import GenericButton from "./GenericButton";

describe("Using module: Logo", () => {
	it("Can see the icon appear", () => {
		const { getByText } = render(<GenericButton text="TestText" style={{}} />);
		expect(getByText("TestText")).toBeInTheDocument();
	});
});
