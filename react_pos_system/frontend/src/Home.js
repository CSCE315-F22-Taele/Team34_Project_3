import NavBar from "./components/universal/NavBar";
import cfaHomeCoke from '../src/assets/cfaHomeCoke.png';
import logo from '../src/assets/Chick-fil-A-Logo.png';
import './styles/homepage.css'
import sandwich from '../src/assets/cfapics/CFASpicySandwich_1080.png';
import sandwich1 from "./assets/cfapics/CFASandwich.png";
import sandwich2 from "./assets/cfapics/_0000s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png";
import { useEffect } from "react";
import React from "react";
const navItems = [
    { navItemName: "Home", route: "/" },
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" }
];

/**
 * react component for home page
 * @function
 * @author @AakashHaran
 */
const Home = (props) => {

    return (
        <>

            <NavBar navItems={navItems} cart = {props.cart} toggleTheme={props.toggleTheme} isCustomer={false} home={"/"} />
            <div className={"homecontainer"}>
                <div className={"sectionleft"}>
                    <div className={"textcontainer fade-in-text"}>
                        <p style={{ fontSize: '80px', fontFamily: 'serif', color: 'black' }}>Order our World Famous Chick-Fil-A Sandwich!</p>
                        <a className={"orderbutton"} to="/menu">Order Now!</a>
                    </div>
                </div>
                <div className={"sectionright"}>
                </div>
            </div>
        </>
    );
}

export default Home;