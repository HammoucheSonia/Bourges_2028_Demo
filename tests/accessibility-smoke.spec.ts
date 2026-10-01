import { expect, test } from "@playwright/test";

test("navigation clavier minimale", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Aller au contenu")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#contenu")).toBeVisible();
});

test("la démo explicite ses limites", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByText(/aucun accès au code ou aux données réelles/i)).toBeVisible();
  await expect(page.getByText(/la bascule A\/B est une simulation visuelle/i)).toBeVisible();
});
