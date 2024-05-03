/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '@playwright/test';
import { testpage } from '../Pages/testpage';

test.describe('Home', () => {
   // variable home page qui n'a pas encore de valeur.
    let homepage: testpage;
    test.beforeEach(async ({ page }) => {

        await page.goto('/');
        homepage= new testpage(page);
    })
    
    test.skip('Open home page and verify title', async ({ page }) => {

        // open Url
       await page.goto('/');

        // verify Title
        await expect(page).toHaveTitle ('Practice E-Commerce Site – SDET Unicorns');
    })
    test.skip('open url and check title', async ({ page }) => {
        
        //open url
       await page.goto('https://practice.sdetunicorns.com/about/');
     // await homepage.navigate();
        //check title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    test('click get started button using Css selector', async ({ page }) => {
        //j'utilise ma variable homepage qui était préalablement en let, et je lui assigne les méthodes qui sont dans mon fichier testpage.ts
        //homepage= new testpage(page);
        //open url
        //await page.goto('https://practice.sdetunicorns.com/');
       //await homepage.navigate();
        //click the botton
        await expect(page).not.toHaveURL('https://practice.sdetunicorns.com/#get-started')
       //await  page.locator('#get-started').click();
       await homepage.getstratedbtn.click();
        //verify url have get-started
        expect (test.info().errors.length).toBeLessThan(1);
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    })
    test('Verify heading text is visible using text selector', async ({ page }) => {
        //homepage= new testpage(page);
        //open url
        //await page.goto('https://practice.sdetunicorns.com/');
       //await homepage.navigate();
        //find the text locator
       //const headingText = page.locator('text=Think different. Make different.')
      const Headingtext = await homepage.Headingtext;
       expect (test.info().errors.length).toBeLessThan(1);
        //verify heading text visible
        await expect(Headingtext).toBeVisible();
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test('verify home link is enabled using text and css selector', async ({ page }) => {
       // homepage= new testpage(page);
        //open url
        //await page.goto('https://practice.sdetunicorns.com/');
       // await  homepage.navigate();
        //find home text
      // const hometext = await page.locator('#zak-primary-menu >> text=Home')
      // const hometext = await page.locator('#zak-primary-menu:has-text("Home")')
       const hometext = homepage.homepagelink;
        //verify home text is enable
        await expect(hometext).toBeEnabled();
        
    })
    test('verify select icon', async ({ page }) => {
   //  homepage= new testpage(page);
        //open url
        //await page.goto('https://practice.sdetunicorns.com/');
        await homepage.navigate();
        //find home text
      // const hometext = await page.locator('#zak-primary-menu >> text=Home')
       //const selecticon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]');
       const selecticon = await homepage.searchicon; 
       //verify home text is enabled
        await expect(selecticon).toBeEnabled();
   
})

test('verify nav link', async ({ page }) => {
    homepage= new testpage(page);
    const expectedlinks =
    [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
    ]
    //open url
  //  page.goto('https://practice.sdetunicorns.com/');
    await homepage.navigate();
   // await homepage.navigate();
    //find nav links

   //const navlinks = await page.locator('#zak-primary-menu li[id*=menu]');
   const navlinks = page.locator('#zak-primary-menu li[id*=menu]');
   //const navlinks= await homepage.verifyallnavlinks;
    //verify nav link test
    expect (await navlinks.allTextContents()).toEqual(expectedlinks);
 // await  expect (await navlinks.textContent()).toEqual(expectedlinks[2]);
  //expect (await homepage.getNavLinksText()).toEqual(expectedlinks);
})
})