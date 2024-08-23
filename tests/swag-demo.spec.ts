import { test, expect } from '@playwright/test';

test.beforeEach('Verify Title On Login Page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

test.describe("Login Suite",()=>{
    test("Successful Login", async ({ page })=>{
       await page.locator('id=user-name').fill("standard_user")
       await page.locator('id=password').fill("secret_sauce")
       await page.locator('id=login-button').click();
       })

    test("Unsuccessful Login | Wrong Credentials", async ({ page })=>{
        await page.locator('id=user-name').fill("standard_user")
        await page.locator('id=password').fill("invalid")
        await page.locator('id=login-button').click();
        var erroMsg = await page.locator('data-test=error').textContent()
        expect(erroMsg).toEqual("Epic sadface: Username and password do not match any user in this service");
        })

    test("Unsuccessful Login | Locked User", async ({ page })=>{
            await page.locator('id=user-name').fill("locked_out_user")
            await page.locator('id=password').fill("secret_sauce")
            await page.locator('id=login-button').click();
            var erroMsg = await page.locator('data-test=error').textContent()
            expect(erroMsg).toEqual("Epic sadface: Sorry, this user has been locked out.");
            })
})  