/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '@playwright/test';
import { cartpage } from '../Pages/cartpage';
import { TIMEOUT } from 'dns';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
test.describe('Upload', () => {
  let Uploadpage:cartpage
    test('Upload pdf file from desktop', async ({ page }) => {
       Uploadpage= new cartpage(page);
      //await page.goto("/cart");
      await Uploadpage.NavigateTocart();
        // provide test file path
        const  filePathPdf = path.join(__dirname,'../Data/3mb-file.pdf');    


        //await page.setInputFiles('input#upfile_1', filePath);
        
        //await page.locator('#upload_1').click();
        await Uploadpage.UploadComponent().uploadFile(filePathPdf);

        //await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state:'visible', timeout: 10000});
        await expect (Uploadpage.UploadComponent().SuccesText)
        .toContainText("successfully", {timeout:10000});                 
    })
})
        
    