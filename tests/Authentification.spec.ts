import { Page, expect, test } from '@playwright/test';

test.describe('Authentification', () => {

    test.beforeEach(async ({page}) => {

        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator("button[name='login']").click();
      //  await expect(page.locator('a:has-text("Log out")').nth(0)).toBeVisible()
    });
    
    // verify the log out a
   // let Authentification : AuthentificationPage
   // test.beforeEach(async ({ page }) => {
       // Authentification= new AuthentificationPage (page);
        //await Authentification.NavigateAuthentificationPage();
    
    // eslint-disable-next-line playwright/expect-expect, @typescript-eslint/no-unused-vars
    test('Verify OrderPage', async ({ page }) => {
      // await page.goto('https://practice.sdetunicorns.com/my-account/');
       // await Authentification.LoginForm();
      // await page.locator('#username').fill('practiceuser1');
      // await page.locator('#password').fill('PracticePass1!');
       // await OrderLink
       await page.locator("//a[text()='Orders']").click();
       await expect(page).toHaveURL('/my-account/orders/',{timeout:5000});
      })

    test('Verify DownloadPage', async ({ page }) => {

       // await Dowload link
       await page.locator("//a[text()='Downloads']").click();
       await expect(page).toHaveURL('/my-account/downloads/',{timeout:5000});
    })
})
