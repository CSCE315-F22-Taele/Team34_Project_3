import NavBar from "../components/universal/NavBar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LineGraph from "../components/manager/graphs/LineGraph";
import BarChartGraph from "../components/manager/graphs/BarChartGraph";
import PieChartGraph from "../components/manager/graphs/PieChartGraph";

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
            <div style={{paddingLeft: '3%', paddingRight: '3%'}}>
            <div className={"row"} style={{ marginTop: '3%', height: '35vh'}}>
                <div className={"col"}>
                    <BarChartGraph />
                </div>
                <div className={"col"}>
                    <PieChartGraph />
                </div>
                <div className={"col"}>
                    <div className={"row"} style={{height: '40%', textAlign: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                            <p class="fa-solid fa-2xl" style={{ marginTop: '5%' }}><i class="fa-solid fa-dollar-sign"></i>  1237.00</p>
                            <p class="text-secondary">Earned this month</p>
                    </div>
                    <div className={"row"} style={{marginTop: '5%', height: '40%', textAlign: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                            <p class="fa-solid fa-2xl" style={{ marginTop: '5%' }}><i class="fa-solid fa-user"></i>  153</p>
                            <p class="text-secondary">Customers this month</p>
                    </div>
                </div>
            </div>
            <div className={"row"} style={{marginTop: '5%'}}>
                <div style={{ height: '35vh', width: '100%' }}>
                    <LineGraph />
                </div>
            </div>
            </div>
        </>
    );
}

export default ManagerHome;