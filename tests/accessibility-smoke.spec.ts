import { expect, test } from "@playwright/test";

test("le lien d'évitement place le focus sur le contenu principal", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Aller au contenu")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#contenu")).toBeFocused();
});

test("navigation clavier vers la mission et retour accueil", async ({ page }) => {
  await page.goto("/benevole");
  await expect(page.getByRole("link", { name: /accueil/i }).first()).toBeVisible();
  await page.getByRole("link", { name: /voir le briefing/i }).click();
  await expect(page.getByRole("heading", { name: /accueil public/i })).toBeVisible();
  await expect(page.getByText(/briefing opérationnel/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /^accueil$/i }).first()).toBeVisible();
});

test("la démo explicite ses limites", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByText(/aucun accès au code ou aux données réelles/i)).toBeVisible();
  await expect(page.getByText(/la bascule A\/B est une simulation visuelle/i)).toBeVisible();
});
