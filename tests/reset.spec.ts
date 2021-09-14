import { test, expect } from '@playwright/test';

test('restart test', async ({ page }) => {
    await page.goto('http://localhost:8000');
    await page.check('text=The Finish');
    await page.click('text=Submit');

    await page.check('text=Wood');
    await page.click('text=Submit');

    await page.check('text=Macbath');
    await page.click('text=Submit');

    await page.check('text=Wales');
    await page.click('text=Submit');

    await page.check('text=Ghost');
    await page.click('text=Submit');

    await page.click('text=Restart');

    await page.waitForSelector('text=Which two words traditionally');
    const title = await page.textContent('.panel--title');
    expect(title).toBe('Which two words traditionally appear onscreen at the termination of a feature film?');
});