import { test, expect } from '@playwright/test';

test('app loads', async ({ page }) => {
    page.on('console', msg => console.log(`Console: ${msg.text()}`));
    page.on('pageerror', exception => console.log(`Page Error: ${exception}`));

    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/MapClone/);
});
