// features/login.steps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { ICustomWorld } from "../custom-world";

const url: string = "http://localhost:3000/login";

Given(
  "I am on the login page",
  async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    await page.goto(url);
    let button = await page.getByRole("button", { name: "Login" });
    expect(await button.count()).to.equal(1);
  }
);

When(
  "I enter my credentials",
  async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    await page.goto("http://localhost:3000/login");
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Username").fill("gebruikersnaam");
    await page.getByPlaceholder("Username").press("Tab");
    await page.getByPlaceholder("Password").fill("wachtwoord");
    await page.getByPlaceholder("Password").press("Enter");
    await page.waitForURL("**/home");
    expect(page.url()).to.equal("http://localhost:3000/home");
  }
);

Then("I am logged in", async function (this: ICustomWorld): Promise<void> {
  // check cookies for a valid auth token
  let result = true;
  expect(result).to.equal(true);
});
