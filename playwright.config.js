// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: 'tests',
  timeout: 30_000,
  expect: { timeout: 5000 },
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
};
