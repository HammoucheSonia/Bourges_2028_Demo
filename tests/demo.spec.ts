import { expect, test } from "@playwright/test";

test("les six scénarios principaux sont accessibles", async ({ page }) => {
  for (const path of ["/benevole", "/admin", "/security", "/mission", "/incident", "/eco"]) {
    await page.goto(path);
    await expect(page.getByText(/données 100 % fictives/i)).toBeVisible();
  }
});

test("le parcours mission va jusqu'au check-in", async ({ page }) => {
  await page.goto("/mission");
  await page.getByRole("button", { name: /accepter cette mission/i }).click();
  await expect(page.getByRole("button", { name: /simuler le check-in/i })).toBeVisible();
  await page.getByRole("button", { name: /simuler le check-in/i }).click();
  await expect(page.getByText(/présence enregistrée/i)).toBeVisible();
});

test("la bascule A vers B est démontrable", async ({ page }) => {
  await page.goto("/incident");
  await page.getByRole("button", { name: /simuler la perte du nœud a/i }).click();
  await expect(page.getByText(/nœud b sert 100 % du trafic/i)).toBeVisible({ timeout: 10000 });
});

test("trust pages are reachable", async ({ page }) => {
  await page.goto("/accessibilite");
  await expect(page.getByRole("heading", { name: /parcours utilisables/i })).toBeVisible();
  await page.goto("/confidentialite");
  await expect(page.getByRole("heading", { name: /minimiser les données/i })).toBeVisible();
});

test("benevole direct route can switch context", async ({ page }) => {
  await page.goto("/connexion");
  await page.getByText("Nora Benali").click();
  await page.goto("/benevole");
  const switchButton = page.getByRole("button", { name: /ouvrir la démo comme bénévole/i });
  if (await switchButton.isVisible()) await switchButton.click();
  await expect(page.getByRole("heading", { name: /bonjour camille/i })).toBeVisible();
});
