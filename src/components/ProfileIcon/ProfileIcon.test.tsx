import React from "react";
import { render } from "@testing-library/react";
import ProfileIcon from "./ProfileIcon";
import { AiFillFacebook, AiFillHeart } from "react-icons/ai";

describe("Using module: ProfileIcon", () => {
	it("Can see the icon appear", () => {
		const { getByText, getByRole } = render(<ProfileIcon url="#123" icon={AiFillFacebook} />);
		expect(getByRole("link")).toHaveAttribute("href", "#123");
	});
});
