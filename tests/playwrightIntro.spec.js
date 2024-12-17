//const {} =require("@playwright/test");
import {test} from "@playwright/test";

test("Simple Google search test @google01", async({page}) => {
    await page.goto("https://www.google.com/");
    let searchBox = page.locator("//textarea[@id='APjFqb']");
    await page.waitForTimeout(3000);

    //await searchBox.type("Playwright Automation");
    await searchBox.fill("Playwright Automation");
    await searchBox.press("Enter");
    // Launch the browser
}); 

test("Simple youtube search test @youtube", async({page}) => {
    await page.goto("https://www.youtube.com/")

    // Launch the browser)
});