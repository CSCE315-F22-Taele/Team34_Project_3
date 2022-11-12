import NavBar from "./components/universal/NavBar";
import cfaHomeCoke from '../src/assets/cfaHomeCoke.png';
import cfaHomeSand from '../src/assets/cfaHomeSand.png';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const navItems = [
    { navItemName: "Home", route: "/" },
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" }
];

const Home = () => {

    return (
        <>
            <NavBar navItems={navItems} isCustomer={false} />
            <div className={"homecontainer"}>
                <div className={"sectionleft"}>
                    <div className={"textcontainer"}>
                        <p style={{ fontSize: '80px', fontFamily: 'serif', color: 'black' }}>Order our World Famous Chick-Fil-A Sandwich!</p>
                        <a className={"orderbutton"}>Order Now!</a>
                    </div>
                </div>
                <div className={"sectionright"}>
                    <div className={"pics"} href="/">
                        <img src={cfaHomeSand} width={300} height={400} className={"sand"} />
                        <img src={cfaHomeCoke} width={330} height={500} className={"coke"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;