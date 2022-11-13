import NavBar from "../components/universal/NavBar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
];

export const validateManager = (navigate) => {
    if (sessionStorage.getItem("role") !== "manager") {
        navigate("/forbidden");
    }
}

const ManagerHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
        validateManager(navigate);
    });

    return ( 
        <>
            <NavBar navItems={navItems} />
            <h1>SALES DASHBOARD</h1>
        </>
     );
}
 
export default ManagerHome;