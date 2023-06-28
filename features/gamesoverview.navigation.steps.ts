import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ICustomWorld } from '../custom-world';

const gamesOverviewUrl: string = 'http://localhost:3000/gamesoverview';
const page2Url: string = 'http://localhost:3000/gamesoverview/page2';
const page3Url: string = 'http://localhost:3000/gamesoverview/page3';

Given('I am on the gamesoverview page', async function (this: ICustomWorld): Promise<void> {
  const page = this.page!;
  await page.goto(gamesOverviewUrl);
});

When('I press the button {int}', async function (
  this: ICustomWorld,
  pageNumber: number
): Promise<void> {
  const page = this.page!;
  let urlToNavigate = gamesOverviewUrl;

  switch (pageNumber) {
    case 2:
      urlToNavigate = page2Url;
      break;
    case 3:
      urlToNavigate = page3Url;
      break;

    default:
      break;
  }

  await page.goto(urlToNavigate);
});

Then('I should be looking at page {int}', async function (
  this: ICustomWorld,
  pageNumber: number
): Promise<void> {
  const page = this.page!;
  const currentPage = await page.evaluate(() => {
    return window.location.href;
  });

  let expectedUrl = gamesOverviewUrl;

  switch (pageNumber) {
    case 2:
      expectedUrl = page2Url;
      break;
    case 3:
      expectedUrl = page3Url;
      break;

    default:
      break;
  }

  expect(currentPage).to.equal(expectedUrl);
});