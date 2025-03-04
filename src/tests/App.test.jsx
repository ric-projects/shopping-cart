// Default test
import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// Check if App components renders headline
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);
    screen.debug();
  });
});
