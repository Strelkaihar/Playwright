import { test as setup, expect } from '@playwright/test'

// async function globalSetup() {
//   const browser = await chromium.launch({ headless: false })
//   const context = await browser.newContext()

//   const page = await context.newPage()

//   await page.goto('https://demoblaze.com/')

//   await page.getByRole('link', { name: 'Log in' }).click()
//   await page.locator('#loginusername').fill('test')
//   await page.locator('#loginpassword').fill('test')
//   await page.getByRole('button', { name: 'Log in' }).click()

//   await expect(page.locator('#logout2')).toBeVisible()

//   await page.context().storageState({ path: './user-data/loginAuth.json' })

//   await page.close()
// }

setup('do login', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  await page.getByRole('link', { name: 'Log in' }).click()
  await page.locator('#loginusername').fill('test')
  await page.locator('#loginpassword').fill('test')
  await page.getByRole('button', { name: 'Log in' }).click()

  await expect(page.locator('#logout2')).toBeVisible()

  await page.context().storageState({ path: './user-data/loginAuth.json' })
})

// export default globalSetup
