import NavBar from "./components/universal/NavBar";
import cfaHomeCoke from '../src/assets/cfaHomeCoke.png';
import cfaHomeSand from '../src/assets/cfaHomeSand.png';

const navItems = [
    { navItemName: "Home", route: "/" },
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" }
];

const Home = () => {
    return (
        <>
            <NavBar navItems={navItems} isCustomer={false} />
            <div className={"container"}>
                <div className={"sectionleft"}>
                    <div className={"textcontainer"}>
                        <h1 style={{ fontSize: '80px', fontFamily: 'serif', color: 'black' }}>Order our World Famous Chick-Fil-A Sandwich!</h1>
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