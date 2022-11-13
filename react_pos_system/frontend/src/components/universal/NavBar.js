import '../../styles/navbar.css';
import chickfila from '../../assets/navbar-loog.png';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { googleLogout } from '@react-oauth/google';



function logOut() {
    googleLogout();
    sessionStorage.setItem("role", "logged_out");
}

function placeLoginButton(isLogged) {
    if (!isLogged)
        return <a href="/login" className={"elem accessibility"}>Login</a>
    else 
        return <button className={"elem accessibility"} onClick={() => logOut()}><a href="/">Logout</a></button>
}

const NavBar = (props) => {
    const navigate = useNavigate();
    function placeCart() {
        
        if (sessionStorage.getItem("role") === "logged_out")
            // return <a href="/cart" className={"elem accessibility"}><i class="fa-solid fa-cart-shopping fa-2xl"></i></a>
            return <button className={"elem accessibility"} onClick = {() => navigate("/cart")}><i class="fa-solid fa-cart-shopping fa-2xl"></i></button>
    
    }
    const [isLogged, setLogged] = useState(false);
    

    useEffect(() => {
        if (sessionStorage.getItem("role") === null) {
            sessionStorage.setItem("role", "logged_out");
        }
        setLogged(sessionStorage.getItem("role") === "manager" || sessionStorage.getItem("role") === "server");
        console.log("NAVBAR SEES ROLE: ", sessionStorage.getItem("role"));
    }, [])

    return (
        <div className={"topnav"}>

            <div><img onClick={() => navigate("/")} className={"logo"} src={chickfila} /></div>
            {props.navItems.map(navItem => {
                return <a className={"elem"} href={navItem.route}>{navItem.navItemName}</a>
                // return <Link replace href={navItem.route}>{navItem.navItemName}</Link>
            })}
            {placeCart(true)}
            {placeLoginButton(isLogged)}
            <a className={"elem accessibility"}>Color</a>
            {/* <a className={"elem accessibility"}>Voice</a> */}
        </div>
    );
};

export default NavBar;