import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";
import { AiFillFacebook, AiFillHeart } from "react-icons/ai";

describe("Using module: Logo", () => {
	it("Can see the icon appear", () => {
		const { getByText } = render(<Logo fillColour="#ffffff" />);
		expect(getByText("Tavern Logo")).toBeInTheDocument();
	});
});
