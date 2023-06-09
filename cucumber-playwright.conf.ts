import { ICustomWorld } from "./custom-world";
import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { chromium, ChromiumBrowser, request } from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";

declare global {
  var browser: ChromiumBrowser;
}

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
  global.browser = await chromium.launch();
});

Before(async function (this: ICustomWorld, {}: ITestCaseHookParameter) {
  this.context = await browser.newContext();
  this.server = await request.newContext({
    baseURL: "http://localhost:3000",
  });

  this.page = await this.context.newPage();
});

After(async function (this: ICustomWorld, {}: ITestCaseHookParameter) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
