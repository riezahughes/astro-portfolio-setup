import React from "react";
import { render, waitFor } from "@testing-library/react";
import MainNavigation from "./MainNavigation";

describe("Using module: WebsiteTagline", () => {
	it("can show a simple list of all navigation", () => {
		const { getByText } = render(<MainNavigation menu={[{ url: "test.com", label: "label" }]} />);

		expect(getByText("label")).toBeInTheDocument();
		expect(getByText("label").closest("a")).toHaveAttribute("href", "test.com");
	});
});
