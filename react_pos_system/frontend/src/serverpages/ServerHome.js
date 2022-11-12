import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/universal/NavBar";

const navItems = [
];

const ServerHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("role") === null || sessionStorage.getItem("role") === "logged_out") {
            navigate("/");
        }
    })

    return ( 
        <>
            <NavBar navItems={navItems} />
        </>
     );
}
 
export default ServerHome;