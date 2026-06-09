import { describe, expect, it } from "vitest";

import { cn } from "../utils";

describe("cn", () => {
  it("returns empty string for no arguments", () => {
    expect(cn()).toBe("");
  });

  it("merges a single class", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("resolves conflicting tailwind classes via twMerge", () => {
    expect(cn("px-2 px-4")).toBe("px-4");
  });

  it("ignores falsy conditional values", () => {
    expect(cn(false, null, undefined, "bar")).toBe("bar");
  });

  it("merges array inputs", () => {
    expect(cn(["a", "b"])).toBe("a b");
  });

  it("combines object syntax with strings", () => {
    expect(cn("base", { hidden: false, active: true })).toBe("base active");
  });
});
