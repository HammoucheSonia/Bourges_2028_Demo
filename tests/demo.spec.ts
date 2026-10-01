import { expect, test } from "@playwright/test";

test("les scénarios principaux sont accessibles", async ({ page }) => {
  for (const path of ["/benevole", "/admin", "/security", "/mission", "/incident", "/eco", "/accessibilite", "/confidentialite"]) {
    await page.goto(path);
    await expect(page.getByText(/données 100 % fictives/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /bourges 2028.*accueil/i })).toBeVisible();
  }
});

test("le briefing mission est accessible et va jusqu'au check-in", async ({ page }) => {
  await page.goto("/mission");
  await expect(page.getByText(/briefing opérationnel/i)).toBeVisible();
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

test("un autre profil ne peut pas lire une mission bénévole", async ({ page }) => {
  await page.goto("/connexion");
  await page.getByText("Nora Benali").click();
  await page.goto("/mission");
  await expect(page.getByRole("heading", { name: /appartient à l'espace bénévole/i })).toBeVisible();
});
