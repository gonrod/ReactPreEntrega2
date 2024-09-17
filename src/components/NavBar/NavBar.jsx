// src/components/NavBar/NavBar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ top: 0 }}> {/* Asegura que esté pegado al top */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nombre de la Tienda
        </Typography>
        <Button color="inherit" href="#categoria1">Categoría 1</Button>
        <Button color="inherit" href="#categoria2">Categoría 2</Button>
        <Button color="inherit" href="#categoria3">Categoría 3</Button>
        <CartWidget /> {/* Renderiza el CartWidget dentro del NavBar */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;