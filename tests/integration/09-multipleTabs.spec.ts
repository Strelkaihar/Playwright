import { test, expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'

test.describe('Assertions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://techglobal-training.com/frontend')

    await clickLink(page, 'Multiple Windows')
  })
  test('Creating a new tab', async ({ page, context }) => {
    //Use the existing page to navogate to new tab
    //const newTab = await page.context().newPage()
    const newTab = await context.newPage()
    //use newTab tpo navigate ani URL
    await newTab.goto('https://www.apple.com/')

    await page.bringToFront()

    await newTab.bringToFront()
    await newTab.close()
  })
  test('Interacting switching new tab', async ({ page }) => {
    const [newTab] = await Promise.all([page.waitForEvent('popup'), clickLink(page, 'Apple')])
    // newTab.bringToFront()
    await expect(newTab).toHaveTitle('Apple')

    const [newTab1] = await Promise.all([page.waitForEvent('popup'), clickLink(page, 'Microsoft')])
    await expect(newTab1).toHaveURL('https://www.microsoft.com')
    // await clickLink(page, 'Apple')
    // const newTab = await page.waitForEvent('popup')
    // await newTab.bringToFront()
    // await page.pause()
  })
  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link and validate URL contains "https://www.apple.com/"
   * Click on the "Microsoft" link and validate URL contains "https://www.microsoft.com/en-us/"
   * Click on the "Tesla" link and validate URL contains "https://www.tesla.com/"
   */
  test('Task', async ({ page }) => {
    const links = ['Apple', 'Microsoft', 'Tesla']

    for (const link of links) {
      const [newTab] = await Promise.all([page.waitForEvent('popup'), clickLink(page, link)])
      expect(newTab.url()).toContain(link.toLowerCase())
      await newTab.close()
    }
  })
})
