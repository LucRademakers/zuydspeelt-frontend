'use client';

// installeer library icons: 'npm install @mui/icons-material'
import { Attractions } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'
import DropdownMenu from './Dropdown';

// Zet hier je dropdown Items
const categories = [
    { value: 1, label: 'Action', path:'/categories/action' },
    { value: 2, label: 'Puzzle', path:'/categories/puzzle'  },
    { value: 3, label: 'Multiplayer', path:'/categories/multiplayer'  },
    { value: 4, label: 'Race', path:'/categories/race'  },
    { value: 5, label: 'Sport', path:'/categories/sport'  },
  ];

  

 


export const Navbar = () => {


    return (
       <AppBar position='static' style={{ background: '#0881b5' }} sx={{ boxShadow: 3 }}>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <Attractions/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                ZUYDSPEELT
            </Typography>
            <Stack direction='row' spacing={2}>
                {/* Zet hier je menu in de navbar. Verander de {options} met de naam die je de const had gegeven boveaan de pagina en geef de knop een naam */}
                <DropdownMenu options={categories} buttonName='Categories'/>
                <Button color='inherit'>Login</Button>

            </Stack>
        

        </Toolbar>
       </AppBar>
    )
}