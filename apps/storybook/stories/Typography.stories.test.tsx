import { composeStories } from "@storybook/react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import * as stories from "./Typography.stories";

const composed = composeStories(stories);

afterEach(() => {
  cleanup();
});

describe("Typography.stories", () => {
  it("Default", () => {
    render(<composed.Default />);
    expect(screen.getByRole("heading", { name: "Typography Heading" })).toBeInTheDocument();
  });
});
