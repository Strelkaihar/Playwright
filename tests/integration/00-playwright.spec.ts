import { test, chromium } from 'playwright/test'
//test block here will trigger the test runner
test('Playwright 101 - Test case', () => {})
//test runner will trigger the browser contrext
//using {page} fixture
// test('Playwright 101 - Test case 2', ({ page }) => {
//   //test to be executed
// })

test('Playwright 101 - Test case 3', async ({ page }) => {
  await page.goto('https://techglobal-training.com')
})

test('Playwright 101 - Test case | Browser context', async ({ browser }) => {
  //create a new incognito browser context
  const context = await browser.newContext()
  //Create a new page inside the context
  const page = await context.newPage()

  await page.goto('https://techglobal-training.com')
  await context.close()
})

test('Playwright 101 - Manual trigger', async () => {
  const browser = await chromium.launch()

  const context = await browser.newContext()

  const page = await context.newPage()

  await page.goto('https://techglobal-training.com')

  await context.close()
})
