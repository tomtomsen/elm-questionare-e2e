import { test, expect } from '@playwright/test';

test('must select an answer', async ({ page }) => {
    await page.goto('http://localhost:8000');
    let title = await page.textContent('.panel--title');
    expect(title).toBe('Which two words traditionally appear onscreen at the termination of a feature film?');

    await page.click('text=Submit');

    title = await page.textContent('.panel--title');
    expect(title).toBe('Which two words traditionally appear onscreen at the termination of a feature film?');
});