import test from "@playwright/test";
import { clickButton, clickLink } from "../../helpers/clickHelpers";


test.describe('', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://techglobal-training.com/frontend')

        await clickLink(page, 'Html Elements')
    })

    test('User Action - click and Hover', async({page}) => {

        const dropDownButton = page.locator('#dropdown-button')

        await dropDownButton.hover()
        await clickButton(page, 'Register')
   
    })
    test('User Action - Type', async({page}) => {

        const textInput = page.locator('#text_input1')

        await textInput.fill('Cypress')
        await textInput.fill('PlayWright')
    })

    test('User Action - CheckBox and radio Button', async ({page}) => {

        const apple = page.getByRole('checkbox', {name: 'Apple'})
        const microsoft = page.getByRole('checkbox', {name: 'Microsoft'})
        const tesla = page.getByRole('checkbox', {name: 'Tesla'})

        await apple.check()
        await apple.uncheck()
        
        const checkBoxGroup = await page.locator('checkbox-button-group input').all()

        for(const check of checkBoxGroup) {
            await check.check()
            await check.uncheck()
        }

    })
    test('User Action - Dropdown', async({page}) => {

        const companyDropdown = page.locator('#company_dropdown1')
        // by index
        await companyDropdown.selectOption({index: 1})
        // by label
        await companyDropdown.selectOption({label: 'Apple'})
        // By value
        await companyDropdown.selectOption({value: 'Tesla'})
    })

    test('User Action - Calendar/DatePicker', async({page}) => {

        const date1 = page.locator('#date_input1')
        const date2 = page.locator('#date_input2')
        
        await date1.fill('01/01/2000')
        await page.keyboard.press('Enter')

        await date2.fill('01/01/2000')
        await page.keyboard.press('Enter')
    })
})