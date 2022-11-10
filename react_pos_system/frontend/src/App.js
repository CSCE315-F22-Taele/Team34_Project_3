// import Head from 'next/head'
// import Image from 'next/image'
import cfaHomeSand from './assets/cfaHomeSand.png';
import cfaHomeCoke from './assets/cfaHomeCoke.png';
import NavBar from './components/universal/NavBar'
import './styles/homepage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MenuView from './customerpages/MenuView';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<MenuView />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};
