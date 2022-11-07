import styles from '../../styles/universal/Navbar.module.css';
import chickfila from '../../assets/navbar-loog.png';
import Image from 'next/image';
import React, { useState, useEffect } from "react";

function Cart({currRole}) {
    if (currRole === "logged_out")
        return <a className={styles.accessibility}>Cart logo</a>
}

function LoginButton({ currRole }) {
    console.log("CURR ROLE", currRole);

    if (currRole === "logged_out") {
        return (
            <a href="/login" className={styles.accessibility}><button onClick={() => {
            console.log("SETTING ITEM FROM LOGIN");
            localStorage.setItem("role", "logging_in")
            }} style={{ all: "unset" }}>Login</button></a>
        )
    } else {
        console.log("TEST");
        return (
            <a href="/" className={styles.accessibility}><button onClick={() => localStorage.setItem("role", "logged_out")} style={{ all: "unset" }}>Log out</button></a>
        );
    }
}

const NavBar = (props) => {
    const [currRole, setCurrRole] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("role") === null) {
                localStorage.setItem("role", "logged_out");
            }
            setCurrRole(localStorage.getItem("role"));
        }
    }, []);

    return (
        <div className={styles.topnav}>
            
            <div className={styles.logo}  href="/"><Image src={chickfila} width={170} height={100} /></div>
            {props.navItems.map(navItem => {
                return <a key={navItem.navItemName} href={navItem.route}>{navItem.navItemName}</a>
            })}
            {currRole && <LoginButton currRole={currRole} />}
            {currRole && <Cart currRole={currRole} />}
            <a className={styles.accessibility}>Color</a>
            <a className={styles.accessibility}>Translation</a>
        </div>
    );
};

export default NavBar;