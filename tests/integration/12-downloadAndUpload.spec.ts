import { test, expect } from '@playwright/test'
import { clickLink } from '../../helpers/clickHelpers'
import fs from 'fs' // library allowed us to read manipulate with the file

test.describe('Download & Upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/frontend')
    await clickLink(page, 'File Download & Upload')
  })

  test('Download a file', async ({ page }) => {
    const [download] = await Promise.all([page.waitForEvent('download'), page.click('#file_download')])

    const downloadPath = 'downloads/Hello.txt'

    await download.saveAs(downloadPath)

    expect(fs.existsSync(downloadPath)).toBeTruthy()
  })

  test('Upload a File', async ({ page }) => {
    const uploadLink = page.locator('#file_upload')
    const uploadPath = 'downloads/Hello.txt'

    await uploadLink.setInputFiles(uploadPath)
    // uploading multiple files using array
    // await uploadLink.setInputFiles([uploadPath, uploadPath])

    await page.click('#file_submit')
    console.log(process.env.BASE_URL)
  })
})
