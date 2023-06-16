
'use client'

import Link from "next/link";
import { Mail, Person, Lock } from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Login() {

  const goToHome = () => {
    window.location.href = "/";
  }
  

  return (
    
    <div className="bg-indigo-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">

        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <Mail style={{ color: 'white', fontSize: 48 }}/>  
        </div>

        <form className="p-12 md:p-24">

          <div className="flex items-center text-lg mb-6 md:mb-8">
            <div className="bg-gray-200 pl-4 py-3 w-full">
                <Box>
                  <TextField
                    sx={{width: 410}}
                    id="inputUsername"
                    placeholder="Username"
                    type="text"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
            </div>
          </div>

          <div className="flex items-center text-lg mb-6 md:mb-8">
            <div className="bg-gray-200 pl-4 py-3 w-full">
                  <Box>
                    <TextField
                      sx={{width: 410}}
                      id="inputPassword"
                      placeholder="Password"
                      type="password"
                      autoComplete="current-password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
            </div>
          </div>
          
          <div className="-mt-6 mb-2">
            <Link href="/register">Don&apos;t have an account yet?  Sign Up</Link>
          </div>

          <div className="flex justify-center">           
          
            <Button 
              style={{backgroundColor: 'black', color: 'white', width: 275}}

              onClick={goToHome}
              variant="contained">
              Sign in
            </Button> 
          </div> 
      </form>
    </div>
   </div>
  )
}
