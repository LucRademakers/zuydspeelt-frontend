"use client";
import { useAuthenticatedUser } from "../app/authHandler";
import Attractions from "@mui/icons-material/Attractions";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { API_ENDPOINT } from "../constants/apiConstants";
import Link from 'next/link';

import DropdownMenu from "./Dropdown";
import Searchbar from "@/components/Searchbar";

async function fetchCategories(user: any) {
  if (user?.apiToken == null) {
    return [];
  }
  let result = await fetch(API_ENDPOINT.CATEGORIES, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.apiToken,
    },
  });
  return await result.json();
}

function CategoriesDropDown(props: any): JSX.Element {
  const user = useAuthenticatedUser();
  // log user
  console.log(user);
  let categories: any =
    user != undefined
      ? fetchCategories(user).then((result) =>
          result.map((category: any) => {
            return {
              value: category.id,
              label: category.name,
              path: "/games/category/" + category.id,
            };
          })
        )
      : [{ value: 1, label: "Loading...", path: "#" }];

  return <DropdownMenu options={categories} buttonName="Categories" />;
}

function LoginButton(props: any): JSX.Element {
  if (useAuthenticatedUser() == undefined) {
    return (
      <Button color="inherit" href="/login">
        Login
      </Button>
    );
  }
  return <></>;
}

// Zet hier je dropdown Items

const games = [
  { value: 1, label: "Alex In Danger", path: "/games/alex-in-danger" },
  {
    value: 2,
    label: "Fancy Pants Adventures",
    path: "/games/fancy-pants-adventures",
  },
  {
    value: 3,
    label: "The Impossible Quiz",
    path: "/games/the-impossible-quiz",
  },
  {
    value: 4,
    label: "The Worlds Hardest Game",
    path: "/games/the-worlds-hardest-game",
  },
  { value: 5, label: "Tic Tac Toe", path: "/games/tic-tac-toe" },
];

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "#0881b5" }}
      sx={{ boxShadow: 3 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          href="/"
        >
          <Attractions />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZUYDSPEELT
        </Typography>
        <Stack direction="row" spacing={2}>
          {/* Zet hier je menu in de navbar. Verander de {options} met de naam die je de const had gegeven boveaan de pagina en geef de knop een naam */}
            <Button color="inherit" href="gamesoverview/">
            Gamesoverview
            </Button>
          <CategoriesDropDown />
          <DropdownMenu options={games} buttonName="Games" />
          <LoginButton />
        </Stack>
        <Searchbar />
      </Toolbar>
    </AppBar>
  );
};
