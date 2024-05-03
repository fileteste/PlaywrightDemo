import { test, expect } from '@playwright/test';
import {Contactpage} from '../Pages/Contactpage';
import { faker } from '@faker-js/faker';



test.describe('Contact', () => {
  let Contact: Contactpage
  test.beforeEach(async ({ page }) => {

    Contact= new Contactpage(page);  
    await Contact.NavigatePageContact();
  })
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test('open contact page and verify text content', async ({ page }) => {
      
      //open page
        //await page.goto('https://practice.sdetunicorns.com/contact/');
        //await page.pause();
        
        await Contact.SubmitForm(
          faker.name.firstName(), 
          faker.internet.email(),
          faker.phone.number(),
          faker.lorem.paragraphs(3));
        //Verify text content
       // const Headers = await page.locator('text="Send Us Message"')
       //await expect (Headers).toBeEnabled();
    
        await expect (Contact.Text).toBeEnabled();
        //await page.locator('.contact-name input').fill('Test');
       // await page.locator('#evf-277-field_ys0GeZISRs-1').fill('Test');
       // await Contact.Name.fill(Name);
      //await page.locator('.contact-email input').fill('Admin@gmail.com');
      //await page.locator('#evf-277-field_LbH5NxasXM-2').fill('Admin@gmail.com');
      //  await Contact.Email.fill('Admin@gmail.com');
        //await page.locator('.contact-phone input').fill('0600000000');
      //  await Contact.Phone.fill('0600000000');
       // await page.locator('.contact-message textarea').fill('Hello');
       // expect.soft(page.locator('.contact-message textarea')).toHaveText('Message');
     //  await Contact.Message.fill('Hello');
        //expect(test.info().errors.length).toBeLessThan(1);
       // await page.locator('button[type=submit]').click();
       //await Contact.Btnsubmit.click();
     // const Sucess = await page.locator('div[role="alert"]');
      // expect (Sucess).toHaveText('Thanks for contacting us! We will be in touch with you shortly',{timeout:10000});
      await expect (Contact.ReturnMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly',{timeout:10000});
      })
  })




