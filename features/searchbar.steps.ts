// features/searchbar.steps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { ICustomWorld } from "../custom-world";

const url: string = "http://localhost:3000";

Given(
  "I am on the home page",
  async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    await page.goto(url);
  }
);

When(
  "I look at the search bar",
  async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    const searchBar = await page.getByPlaceholder("Search games...");
    expect(searchBar).to.exist;
  }
);

Then(
  "The placeholder text should be 'Search games...'",
  async function (this: ICustomWorld): Promise<void> {
    let page = this.page!;
    const searchBar = await page.getByPlaceholder("Search games...");
    const placeholderText = await searchBar.getAttribute('placeholder');
    expect(placeholderText).to.equal("Search games...");
  }
);
