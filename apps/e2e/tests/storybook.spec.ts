import { expect, test } from "@playwright/test";

function storyFrame(page: import("@playwright/test").Page) {
  return page.frameLocator("#storybook-preview-iframe");
}

test.describe("Storybook smoke", () => {
  test("loads storybook shell", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#storybook-preview-iframe")).toBeVisible();
  });

  test("renders Button Default story", async ({ page }) => {
    await page.goto("/?path=/story/primitives-button--default");
    const frame = storyFrame(page);
    await expect(frame.getByRole("button", { name: "Button" })).toBeVisible();
  });

  test("renders Input Default story", async ({ page }) => {
    await page.goto("/?path=/story/primitives-input--default");
    const frame = storyFrame(page);
    await expect(frame.getByPlaceholder("Email")).toBeVisible();
  });

  test("switches to dark theme", async ({ page }) => {
    await page.goto(
      "/?path=/story/primitives-button--default&globals=theme:dark",
    );
    const frame = storyFrame(page);
    await expect(frame.locator(".dark").first()).toBeVisible();
  });
});
