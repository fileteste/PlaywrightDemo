import { test, expect } from '@playwright/test';

test.describe('Aboutpage', () => {
    test('open url and check title', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/about/');
        //check title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    
})

