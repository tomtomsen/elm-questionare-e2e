import { test, expect } from '@playwright/test';

test('all answers correct test', async ({ page }) => {
    await page.goto('http://localhost:8000');
    await page.check('text=The End');
    await page.click('text=Submit');

    await page.check('text=Metal');
    await page.click('text=Submit');

    await page.check('text=Darren');
    await page.click('text=Submit');

    await page.check('text=Scotland');
    await page.click('text=Submit');

    await page.check('text=Sister Act');
    await page.click('text=Submit');

    await page.waitForSelector('text=Questionare complete');
    const content = await page.textContent('.panel--content');
    expect(content).toBe('5 of 5 answers correct');
});