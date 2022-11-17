import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/universal/NavBar";

const navItems = [
];

const ServerHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("SERVER HOME SEES ROLE: ", sessionStorage.getItem("role"));
        if (sessionStorage.getItem("role") !== "server" && sessionStorage.getItem("role") !== "manager") {
            navigate("/forbidden");
            console.log("SERVER IS CHANGING ROLE TO LOGGED OUT")
            sessionStorage.setItem("role", "logged_out");
        }
    });

    return ( 
        <>
            <NavBar navItems={navItems} />
        </>
     );
}
 
export default ServerHome;