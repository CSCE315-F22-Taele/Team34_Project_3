import NavBar from '../components/universal/NavBar';
import React, {useState, useEffect} from "react";
import CartItemCard from '../components/customer/CartItemCard';
import '../styles/customer/cart.css'
import empcart from '../assets/emptycart.png';
import { useNavigate, Link } from "react-router-dom";





const navItems = [
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" },
];

export default function CartView(props) {

    const SubTotal = props.cart.reduce((a,c) => a + c.item_price * c.item_quantity, 0)
    const TotalPrice = SubTotal * 1.0825;

    return (
        <div style={{ overflow: 'hidden', height: 'fit-content', paddingBottom: '10%' }}>
            <NavBar navItems={navItems} isCustomer={false} />
            <div className = "cartgrid">
            <ul>
            {props.cart.map((item) => { return <CartItemCard className = "cartItem"  item={item} cart = {props.cart} setCart = {props.setCart} incrementCartItem = {props.incrementCartItem} decrementCartItem = {props.decrementCartItem} ></CartItemCard> })}
            </ul>
            </div>

            {props.cart.length === 0 && (
                <>
                <h1 className = "EmptyCart" style={{ fontSize: '65px', fontFamily: 'serif', color: 'black' }}> Your Cart Is Empty!  </h1>
                <div><img className={"empcart"} src={empcart} /></div>

                <Link to="/menu">
                <button className = "orderbuttoncart">Order Now!</button>
                </Link>
                </>
            )}
   
            
            {props.cart.length !== 0 && (
                <>
                <div className ="TotalSummary" >
                    <div style={{fontFamily: 'serif', color: 'black' }}>Sub Total: ${SubTotal.toFixed(2)}</div>
                    <div style={{fontFamily: 'serif', color: 'black' }}>Total: ${TotalPrice.toFixed(2)}</div>
                </div>
                <button onClick = {() => props.sendOrder(props.cart, props.setCart, TotalPrice)} className = "Send_Order"> Pla Order</button>

                </>
           
            )}
        </div>
        




    );
};

