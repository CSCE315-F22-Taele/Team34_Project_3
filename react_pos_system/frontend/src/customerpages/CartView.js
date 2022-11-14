import NavBar from '../components/universal/NavBar';
import React, {useState, useEffect} from "react";
import CartItemCard from '../components/customer/CartItemCard';

const navItems = [
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" },
];

export default function CartView(props) {

    const SubTotal = props.cart.reduce((a,c) => a + c.item_price * c.item_quantity, 0)
    const TotalPrice = SubTotal * 1.0825;

    return (
        <div style={{ overflow: 'hidden', height: 'fit-content', paddingBottom: '10%' }}>
            <NavBar navItems={navItems} isCustomer={false} home={"/"} />

            <ul>
            {props.cart.map((item) => { return <CartItemCard  item={item} cart = {props.cart} setCart = {props.setCart} incrementCartItem = {props.incrementCartItem} decrementCartItem = {props.decrementCartItem} ></CartItemCard> })}
            </ul>
            {props.cart.length === 0 && (
                <>
                <h1 className = "EmptyCart"> Cart is Empty  </h1>
                </>
            )}
            
            {props.cart.length !== 0 && (
                <>
                <button onClick = {() => props.sendOrder(props.cart, props.setCart, TotalPrice)} className = "Send_Order"> Send Order</button>
                <div className ="TotalSummary" >
                    <div>Sub Total: ${SubTotal.toFixed(2)}</div>
                    <div>Total: ${TotalPrice.toFixed(2)}</div>
                </div>
                </>
           
            )}
        </div>
        




    );
};

