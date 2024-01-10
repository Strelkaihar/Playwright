// import {  chromium, expect } from '@playwright/test'

// async function tearDown() {
//   const browser = await chromium.launch({ headless: false })
//   const context = await browser.newContext()

//   const page = await context.newPage()

//   await page.goto('https://demoblaze.com/')

//   await expect(page.locator('#logout2')).toBeVisible()

//   await page.locator('#logout2').click()

//   await page.close()
// }

// export default tearDown
import { test as teardown, expect } from '@playwright/test'

teardown('do logout', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  await expect(page.locator('#logout2')).toBeVisible()

  await page.locator('#logout2').click()
})
