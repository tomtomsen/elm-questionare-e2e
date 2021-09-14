import { test, expect } from '@playwright/test';

test('no answer correct', async ({ page }) => {
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

    await page.waitForSelector('text=Questionare complete');
    const content = await page.textContent('.panel--content');
    expect(content).toBe('0 of 5 answers correct');
});