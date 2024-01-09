import { test } from '@playwright/test'
import { clickButton, clickLink } from '../../helpers/clickHelpers'

test.describe('Dialogs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://techglobal-training.com/frontend')

    await clickLink(page, 'Alerts')
  })
  test('Handling dialogs', async ({ page }) => {
    //Or we can use page.once() just handle only once
    page.on('dialog', async (dialog) => {
      console.log(dialog.message)
      // await dialog.accept()
      if (dialog.type() === 'alert') {
        await dialog.accept()
      } else if (dialog.type() === 'confirm') {
        await dialog.accept()
      } else {
        await dialog.accept('My message')
      }
    })
    await clickButton(page, 'Warning Alert')
    await clickButton(page, 'Confirmation Alert')
    await clickButton(page, 'Prompt Alert')
  })
})
