// import Head from 'next/head'
// import Image from 'next/image'
import cfaHomeSand from './assets/cfaHomeSand.png';
import cfaHomeCoke from './assets/cfaHomeCoke.png';
import NavBar from './components/universal/NavBar'
import './styles/homepage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MenuView from './customerpages/MenuView';
import CartView from './customerpages/CartView';
import Login from './Login';
import ServerHome from './serverpages/ServerHome';
import React, { useState } from "react";
import Forbidden from './Forbidden';
import ManagerLayout from './managerpages/ManagerLayout';

export default function App() {
  
  const [cart, setCart] = useState([]);

   //Add Items in cart -> MenuView -> MenuItemCard
  function addToCart (item, cart, setCart, id)  { 
    console.log("we are in add to cart");
    const cartCopy  = [...cart]
    const iteminCart = cartCopy.find(item => item.item_id === id)
    const index = cartCopy.findIndex(item => item.item_id === id)
    if(iteminCart) {
      console.log("Item Found")
      const updatedItem = {...iteminCart, item_quantity: iteminCart.item_quantity + 1};
      cartCopy[index] = updatedItem
      console.log("Cart Copy")
      setCart(cartCopy)
    }
    else{
      console.log("Item Not Found")
      setCart(previousCart => {
        const newCart = [...previousCart, item]
        return newCart
      });
    }
    
    console.log(cart)
  }
  //Increment Items in cart -> CartView -> CartItemCard
  function incrementCartItem ( cart, setCart, id) {
    const cartCopy  = [...cart]
    const iteminCart = cartCopy.find(item => item.item_id === id)
    const index = cartCopy.findIndex(item => item.item_id === id)
    console.log("Incrementing Item")
    const updatedItem = {...iteminCart, item_quantity: iteminCart.item_quantity + 1};
    cartCopy[index] = updatedItem
    setCart(cartCopy)

  }
  //Decrement Items in cart -> CartView -> CartItemCard
  function decrementCartItem (cart, setCart, id) { 
    const cartCopy  = [...cart]
    const iteminCart = cartCopy.find(item => item.item_id === id)
    const index = cartCopy.findIndex(item => item.item_id === id)
    console.log("Decrementing Item")
    if(iteminCart.item_quantity === 1 ) {
      console.log("Deleting Last item")
      cartCopy.splice(index, 1);
      setCart(cartCopy)
    }
    else{
      const updatedItem = {...iteminCart, item_quantity: iteminCart.item_quantity - 1};
      cartCopy[index] = updatedItem
      setCart(cartCopy)
    }
  }

  function sendOrder (cart, setCart, order_price) {
    cart = []
    console.log("Sending Order");
    console.log(order_price);
    setCart(cart);
  }

  
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<MenuView cart = {cart} addToCart={addToCart} setCart = {setCart} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/server" element={<ServerHome />}></Route>
          <Route path="/cart" element = {<CartView cart = {cart} setCart= {setCart} incrementCartItem = {incrementCartItem} decrementCartItem = {decrementCartItem} sendOrder = {sendOrder} />}></Route>
          <Route path="/manager" element={<ManagerLayout />}></Route>
          <Route path="/forbidden" element={<Forbidden />}></Route>
          <Route path="/items" element={<ManagerLayout />}></Route>
          <Route path="/ingredients" element={<ManagerLayout />}></Route>
          <Route path="/employees" element={<ManagerLayout />}></Route>
          <Route path="/orders" element={<ManagerLayout />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};
