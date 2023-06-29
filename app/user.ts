export class User {
  constructor(
    public email: string,
    public apiToken: string,
    public expirationDate: Date,
    public isLoggedIn: boolean
  ) {
    this.email = email;
    this.apiToken = apiToken;
    this.expirationDate = expirationDate;
    this.isLoggedIn = true;
    return this;
  }
}
