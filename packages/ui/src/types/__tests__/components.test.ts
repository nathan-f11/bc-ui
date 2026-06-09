import { describe, expect, it } from "vitest";

import {
  BADGE_VARIANTS,
  BUTTON_REQUIRED_STORY_VARIANTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  THEME_MODES,
  UI_EXPORTS,
} from "../components";

function expectUnique(values: readonly string[]) {
  expect(new Set(values).size).toBe(values.length);
}

describe("component constants", () => {
  it("defines expected UI exports", () => {
    expect(UI_EXPORTS).toEqual(["Button", "Input", "Card", "Badge"]);
  });

  it("keeps button variants unique", () => {
    expectUnique(BUTTON_VARIANTS);
    expect(BUTTON_VARIANTS).toHaveLength(6);
  });

  it("keeps badge variants unique", () => {
    expectUnique(BADGE_VARIANTS);
    expect(BADGE_VARIANTS).toHaveLength(4);
  });

  it("keeps button sizes unique", () => {
    expectUnique(BUTTON_SIZES);
    expect(BUTTON_SIZES).toHaveLength(4);
  });

  it("requires story variants to be subset of button variants", () => {
    for (const variant of BUTTON_REQUIRED_STORY_VARIANTS) {
      expect(BUTTON_VARIANTS).toContain(variant);
    }
  });

  it("defines light and dark theme modes", () => {
    expect(THEME_MODES).toEqual(["light", "dark"]);
  });
});
