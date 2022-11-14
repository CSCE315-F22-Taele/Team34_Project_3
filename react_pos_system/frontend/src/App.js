// import Head from 'next/head'
// import Image from 'next/image'
import cfaHomeSand from './assets/cfaHomeSand.png';
import cfaHomeCoke from './assets/cfaHomeCoke.png';
import NavBar from './components/universal/NavBar'
import './styles/homepage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MenuView from './customerpages/MenuView';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("normal");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "normal" ? "blind" : "normal"));
  };
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <div id={theme}>
    {/* <ReactSwitch onChange={toggleTheme} checked={theme === "normal"} /> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<MenuView />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );

};
