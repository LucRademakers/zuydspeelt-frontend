"use client";

// installeer library icons: 'npm install @mui/icons-material'
import Attractions from "@mui/icons-material/Attractions";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import DropdownMenu from "./Dropdown";

// Zet hier je dropdown Items
const categories = [
  { value: 1, label: "Puzzle", path: "/" },
  { value: 2, label: "Race", path: "/" },
  { value: 3, label: "Action", path: "/" },
];

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "#0881b5" }}
      sx={{ boxShadow: 3 }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Attractions />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZUYDSPEELT
        </Typography>
        <Stack direction="row" spacing={2}>
          {/* Zet hier je menu in de navbar. Verander de {options} met de naam die je de const had gegeven boveaan de pagina en geef de knop een naam */}
          <DropdownMenu options={categories} buttonName="Categories" />
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
