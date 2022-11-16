import '../styles/customer/menu.css'
import MenuNavBar from '../components/customer/MenuNavBar';
import MenuItemCard from '../components/customer/MenuItemCard';
import NavBar from '../components/universal/NavBar';
import items from './data'
import React, { useState } from "react";

const navItems = [ 
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" },
];

export default function MenuView(props) {
    const [myitems, setItems] = useState(items.filter((item) => item.item_type === "Entree"));
    
    return (
        <div style={{ overflow: 'hidden', height: 'fit-content', paddingBottom: '10%' }}>
            <NavBar navItems={navItems} isCustomer={false} home={"/"} />
            <MenuNavBar menuNavBar myitems={items} setItems={setItems} ></MenuNavBar>

            <div className={"gridcontainer"}>
                {myitems.map((item) => { return <MenuItemCard className={"griditem"} item={item} addToCart = {props.addToCart} cart = {props.cart} setCart = {props.setCart} ></MenuItemCard> })}
            </div>
        </div>
    );
};
