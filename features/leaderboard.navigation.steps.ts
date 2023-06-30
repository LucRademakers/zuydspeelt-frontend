import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { ICustomWorld } from "../custom-world";

const categoriesUrl: string = 'http://localhost:3000/categories/action';
const leaderboardUrl: string = 'http://localhost:3000/leaderboard/action';

  Given('I am on the categories action page', async function (this: ICustomWorld): Promise<void> {
    const page = this.page!;
    await page.goto(categoriesUrl);
  });

  When(
    "I press the button Leaderboard",
    async function (this: ICustomWorld): Promise<void> {
      let page = this.page!;
      await page.goto(categoriesUrl);
      await page.locator("//html/body/main/div[2]/a").click();
      await page.waitForURL(leaderboardUrl);
      expect(page.url()).to.equal(leaderboardUrl);
    }
  );

  Then("I should be looking at action leaderboard page", async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    expect(page.url()).to.equal(leaderboardUrl);
  });

