import React from "react";
import { render } from "@testing-library/react";
import TestComponent from "./TestComponent";

describe("Testing custom component and husky", () => {
  it("can at the very least render the component", async () => {
    const { getByRole } = render(<TestComponent />);
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      "This is a test!"
    );
  });
});
