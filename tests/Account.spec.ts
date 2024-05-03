import { test, expect } from '@playwright/test';

test.describe('My Account', () => {
    test('Acces Order', async ({ page }) => {
        await page.goto('/my-account/')
        await page.locator()
    })
    
})
