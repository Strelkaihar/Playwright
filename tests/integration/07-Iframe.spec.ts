import {test, expect} from "@playwright/test";
import { clickLink } from "../../helpers/clickHelpers";

test.describe("Assertions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend");

    await clickLink(page, "IFrames");
  });
  test('Iframe', async({page}) => {
      const frameLocator = page.frameLocator('#form_frame');
      await frameLocator.locator('#first_name').fill('John')
      await frameLocator.locator('#last_name').fill('Doe')
      const fName = 'John'
      const lName = 'Doe'
      await frameLocator.getByRole('button', {name: 'SUBMIT'}).click()

      await expect(page.locator('#result')).toContainText(`You entered: ${fName} ${lName}`)
    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */
  })
})