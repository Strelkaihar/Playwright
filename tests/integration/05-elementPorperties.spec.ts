import test from "@playwright/test";
import { clickButton, clickLink } from "../../helpers/clickHelpers";


test.describe('', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://techglobal-training.com/frontend')

        await clickLink(page, 'Html Elements')
    })

    test('Getting Element Properties', async ({page}) => {
     const headings = page.locator('[data-identifier="Headings"]')

    const allInnerText = await headings.allInnerTexts()
    const innerText = await headings.innerText()
    
    const innerTextHTML = await headings.innerHTML()
    console.log(allInnerText)
    console.log(innerText)
    console.log(innerTextHTML)
    
    const textContent = await headings.textContent()
    
    console.log(textContent)

    const innerElement = headings.locator('h4')
    console.log(await innerElement.count())

    const attr = await headings.getAttribute('data-identifier')
    console.log(attr)

    const companyDropdown = page.locator('#company_dropdown1')
    // by index
    await companyDropdown.selectOption({index: 1})

    console.log(await companyDropdown.inputValue())
    })

    test('Executing JavaScript code in Playwright', async ({page}) => {
        const result = await page.evaluate(() => {
            return document.title
        })
        console.log(result)
        const href = await page.evaluate(() => {
            return document.location.href
        })
        console.log(href)

        const element = page.locator('#main_heading')
        const backgroundColor = await element.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor
        })
        console.log(backgroundColor)

        
    })
})