const API_BASE_URL = "https://zuydspeeltapi-dev.azurewebsites.net";

export enum API_ENDPOINT {
  BASE_URL = API_BASE_URL,
  CATEGORIES = API_BASE_URL + "/api/categories",
  GAMES = API_BASE_URL + "/api/games",
  LOGIN = API_BASE_URL + "/login",
}
