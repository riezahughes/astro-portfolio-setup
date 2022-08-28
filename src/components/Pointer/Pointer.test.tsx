import React from "react";
import { render, waitFor } from "@testing-library/react";
import Pointer from "./Pointer";

describe("Using module: WebsiteTagline", () => {
	it("can show a simple list of all navigation", () => {
		const { getByRole } = render(<Pointer text="" size="small" />);
		// expect all labels to appear correctly
		// expect all links to appear correctly
		// expect clicking a link to change which one is active (css)

		// expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
		// expect(getByRole("heading", { level: 1 })).toHaveTextContent("google.com");
		// expect(getByRole("heading", { level: 1 })).toHaveTextContent("images");
	});
});
