import {test, expect} from "playwright/test";

test.describe('First test suide', () => {

    test('Refresh, navigate back and forward', async ({page}) =>{
        await page.goto('https://techglobal-training.com')
        //Refresh the page
        await page.reload()
        await page.goto('https://techglobal-training.com')
        //navigate back
        await page.goBack();
        //navigate forward
        await page.goForward();
    });
    test('Validate page title', async({page}) => {
        await page.goto('https://techglobal-training.com');

        const title = await page.title();
        //1 way to assert title
        expect(title).toBe('TechGlobal Training | Home');
        //2 way to assert title
        await expect(page).toHaveTitle('TechGlobal Training | Home')

    });
    test('Validate page url', async({page}) => {
        await page.goto('https://techglobal-training.com/');

        const url = page.url();
        //1 way to assert title
        expect(url).toBe('https://techglobal-training.com/');
        //2 way to assert title
        await expect(page).toHaveURL('https://techglobal-training.com/')

    })
    test('My first Test', async({page}) => {
        await page.goto('https://techglobal-training.com/');
        const myLogo = page.locator('#logo')
        await myLogo.click()
        //validate logo is visible
        await expect(myLogo).toBeVisible()

    })
})