import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



const App = () => {
  return (
    <div className="App">
      <NavBar /> {/* Renderiza NavBar en la parte superior */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" /> {/* Renderiza ItemListContainer debajo del NavBar */}
    </div>
  );
};

export default App;