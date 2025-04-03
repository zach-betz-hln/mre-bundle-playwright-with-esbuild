import { chromium } from "playwright";

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://playwright.dev/");
const title = await page.title();
console.log(`title=${title}`);

await context.close();
await browser.close();
