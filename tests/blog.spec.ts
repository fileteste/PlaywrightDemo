import { test, expect } from '@playwright/test';

import { Blogpage } from '../Pages/Blogpage';

test.describe('Blog', () => {
    let blog: Blogpage;
    test('verifu recent posts count and verify the lengh of each', async ({ page }) => {
        blog=new Blogpage(page);
        //open the page
        //await page.goto('https://practice.sdetunicorns.com/blog/');
       await blog.NavigateBlogPage();
        // get the recent post list element
        //const recentpostlist = page.locator('#recent-posts-3 ul li');
       blog.recentpostlist;


        //loop through the list and assert the char lengh > 10
        for (const EL of await blog.recentpostlist.elementHandles()) {
                expect(((await EL.textContent())!.trim()).length).toBeGreaterThan(10);
         // ! = dis qu'il y'aurait toujours du text   
           // await recentpostlist : récuperer les éléments depuis la page
            // await recentpostlist.elementHandles(): le passage d'un li vers un autre
            //expect(((await EL.textContent()).trim()).length): remonte-moi la longueur des texts en supprimant les espaces.
            //toBeGreaterThan(10): la longeur des textes doit être superieur à 10

        //Assert the total lengh = 5

        expect (await blog.recentpostlist.count()).toEqual(5);
            // vérifier si le nombre de ligne correspondante au recent poste sont égale à 5
        }
    })
})
    

    