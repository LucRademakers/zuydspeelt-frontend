import { User } from "./user";
import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants/apiConstants";

let currentUser: User | undefined = undefined;

function setLoggedInUser(email: string, token: string, expirationDate: Date) {
  let user: User = {
    email: email,
    apiToken: token,
    expirationDate: expirationDate,
    isLoggedIn: true,
  };
  console.log("Setting user", user);
  currentUser = user;
}

async function fetchLogin(email: string, password: string) {
  let result = await fetch(API_ENDPOINT.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (result.status === 200) {
    return await result.json();
  } else throw new Error("Login failed");
}

export async function login(email: string, password: string) {
  let response: any = await fetchLogin(email, password);
  if (response.token === undefined) {
    throw new Error("Login failed");
  }
  setLoggedInUser(email, response.token, response.expiresAt);
}

export function useAuthenticatedUser() {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  return user;
}
