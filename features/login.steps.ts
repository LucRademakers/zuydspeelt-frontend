// features/login.steps.ts

import { binding, given, when, then } from "cucumber-tsflow";

@binding()
class loginSteps {
  @given(/^I am on the login page$/)
  public givenIAmOnTheLoginPage(): void {
    console.log("I am on the login page");
  }

  @when(/^I enter '([^"]*)' and '([^"]*)'$/)
  public whenILoginWithUsernameAndPassword(
    username: string,
    password: string
  ): void {
    console.log(`I login with username ${username} and password ${password}`);
  }

  @then(/^I am logged in$/)
  public thenIAmLoggedIn(): void {
    console.log("I am logged in");
  }
}

export = loginSteps;
