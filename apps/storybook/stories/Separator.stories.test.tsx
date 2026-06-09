import { composeStories } from "@storybook/react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import * as stories from "./Separator.stories";

const composed = composeStories(stories);

afterEach(() => {
  cleanup();
});

describe("Separator.stories", () => {
  it("Default", () => {
    const { container } = render(<composed.Default />);
    expect(container.firstChild).toBeTruthy();
  });
});
