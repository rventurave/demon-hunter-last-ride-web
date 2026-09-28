import { test, expect } from "@playwright/test";

test("navigation, accessible mechanics, lightbox keyboard and focus restoration", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("DEMON HUNTER");
  await page.getByRole("link", { name: "DESCUBRIR LA HISTORIA" }).click();
  await expect(page.locator('#navigation a[href="#historia"]')).toHaveAttribute(
    "aria-current",
    "location",
  );
  const mechanic = page.locator('button[aria-controls="mechanic-0"]');
  await mechanic.click();
  await expect(mechanic).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mechanic-0")).toBeVisible();
  await mechanic.click();
  await expect(page.locator("#mechanic-0")).toBeHidden();
  const scene = page.getByRole("button", {
    name: "Ampliar escena 1: El cazador inicia su viaje por un bosque peligroso.",
  });
  await scene.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator(".lightbox-count")).toHaveText("1 / 12");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".lightbox-count")).toHaveText("2 / 12");
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.press("ArrowLeft");
  await expect(page.locator(".lightbox-count")).toHaveText("12 / 12");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Cerrar", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(scene).toBeFocused();
  await page
    .getByRole("button", {
      name: "Ampliar captura 1: El camino entre las sombras",
    })
    .click();
  await expect(page.locator(".lightbox-count")).toHaveText("1 / 4");
  await page.getByRole("button", { name: "Siguiente" }).click();
  await expect(page.locator(".lightbox-count")).toHaveText("2 / 4");
  await page.getByRole("button", { name: "Cerrar", exact: true }).click();
  const broken = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) =>
            !document.getElementById(link.getAttribute("href").slice(1)),
        )
        .map((a) => a.href),
    );
  expect(broken).toEqual([]);
  expect(errors).toEqual([]);
});
for (const width of [320, 390, 768, 1440])
  test(`responsive layout ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.screenshot({
      path: `test-results/layout-${width}.png`,
      fullPage: width === 1440,
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    if (width < 801) {
      const toggle = page.locator(".menu-toggle");
      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await page
        .locator("#navigation")
        .getByRole("link", { name: "Storyboard", exact: true })
        .click();
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(
        page.locator('#navigation a[href="#storyboard"]'),
      ).toHaveAttribute("aria-current", "location");
      await toggle.click();
      await page.keyboard.press("Escape");
      await expect(toggle).toBeFocused();
    }
    await page
      .getByRole("button", {
        name: "Ampliar escena 1: El cazador inicia su viaje por un bosque peligroso.",
      })
      .click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.keyboard.press("Escape");
  });
test("missing media remains explicit and does not request nonexistent assets", async ({
  page,
}) => {
  const missing = [];
  page.on("response", (response) => {
    if (response.status() >= 400) missing.push(response.url());
  });
  await page.goto("/");
  await page.locator("#proyecto").scrollIntoViewIfNeeded();
  await expect(page.locator("video")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "VIDEO PENDIENTE" }),
  ).toHaveCount(4);
  await expect(page.getByText("Documentación de ejemplo.")).toBeVisible();
  expect(missing).toEqual([]);
});
test("reduced motion and skip navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
test("only one video plays at a time across gameplay and user tests", async ({
  page,
}) => {
  const paths = [
    "assets/videos/gameplay-01.mp4",
    "assets/videos/gameplay-02.mp4",
    "assets/videos/tests/user-01.mp4",
  ];
  await page.route("**/*virtual:media*", (route) =>
    route.fulfill({
      contentType: "text/javascript",
      body: `export default ${JSON.stringify(paths)};`,
    }),
  );
  await page.route("**/assets/videos/**/*.mp4", (route) =>
    route.fulfill({
      path: "tests/fixtures/sample.mp4",
      contentType: "video/mp4",
    }),
  );
  await page.goto("/");
  const videos = page.locator("video");
  await expect(videos).toHaveCount(3);
  await videos.nth(0).evaluate((v) => v.play());
  await expect(page.locator(".video-card.is-playing")).toHaveCount(1);
  await videos.nth(1).evaluate((v) => v.play());
  expect(await videos.nth(0).evaluate((v) => v.paused)).toBe(true);
  await videos.nth(2).evaluate((v) => v.play());
  expect(await videos.nth(1).evaluate((v) => v.paused)).toBe(true);
  await expect(page.locator(".video-card.is-playing")).toHaveCount(1);
  await videos.nth(2).evaluate((v) => v.pause());
  await expect(page.locator(".video-card.is-playing")).toHaveCount(0);
});
