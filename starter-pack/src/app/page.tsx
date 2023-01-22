'use client'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [mode, setMode] = React.useState(localStorage.getItem('mode') || 'none')
  const handleChange = (e: SelectChangeEvent<"none" | "light" | "dark">) => {
    const newMode = e.target.value
    if(newMode === 'none') {
      localStorage.removeItem('mode')
    } else {
      localStorage.setItem('mode', newMode)
    }
    setMode(newMode)
    window.dispatchEvent(new StorageEvent('storage', {key: 'mode', newValue: newMode}))
  }
  return (
    <>
    <Navbar />
    <div className='flex items-center m-5'>
      <p className="underline text-4xl font-bold mr-4">
        Hello World
      </p>
      <FormControl variant='outlined' sx={{ m: 1, minWidth: 120, alignContent: 'center'}}>
        <InputLabel id="select-mode-label">Mode</InputLabel>
        <Select
          labelId="select-mode-label"
          id="select-mode"
          value={mode === 'none' ? 'none' : mode === 'light' ? 'light' : 'dark'}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value='dark'>Dark</MenuItem>
          <MenuItem value='light'>Light</MenuItem>
          <MenuItem value='none'>System Default</MenuItem>
        </Select>
      </FormControl>
    </div>
    <br />
    <Footer />
    </>
  )
}
