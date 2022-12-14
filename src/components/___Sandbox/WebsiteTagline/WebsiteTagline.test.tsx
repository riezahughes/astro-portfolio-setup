import React from "react";
import { render, waitFor } from "@testing-library/react";
import WebsiteTagline from "./WebsiteTagline";

describe("Using module: WebsiteTagline", () => {
	it("can show all it's defaults", () => {
		const { getByRole } = render(<WebsiteTagline />);
		expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("google.com");
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("images");
	});

	it("Can show custom entries", () => {
		const { getByRole } = render(
			<WebsiteTagline start="danielruxton.dev" choices={["astro", "react", "nodejs", "contact", "cv"]} />
		);
		expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("danielruxton.dev");
		expect(getByRole("heading", { level: 1 })).toHaveTextContent("astro");
	});

	it("Can change it's state every 3 seconds to the next choice", async () => {
		const { getByText } = render(<WebsiteTagline delay={1000} />);
		await waitFor(() => expect(getByText("news")).toBeInTheDocument(), { timeout: 1500 });
	});
});
