import '../../styles/navbar.css';
import chickfila from '../../assets/navbar-loog.png';
import { Link } from "react-router-dom";
import toggleTheme from '../../App';
function placeCart(isCustomer) {
    if (isCustomer)
        return <a className={"elem accessibility"}>Cart logo</a>
}

function placeLoginButton(isLogged) {
    if (!isLogged)
        return <a className={"elem accessibility"}>Login</a>
}

const NavBar = (props) => {
    return (
        <div className={"topnav"}>
            
            <div><img href="/" className={"logo"} src={chickfila}/></div>
            {props.navItems.map(navItem => {
                return <a className={"elem"} href={navItem.route}>{navItem.navItemName}</a>
                // return <Link replace href={navItem.route}>{navItem.navItemName}</Link>
            })}
            {placeCart(props.isCustomer)}
            {placeLoginButton(false)}
            <button className={"elem accessibility"} onclick="toggleTheme()">Color</button>
            <a className={"elem accessibility"}>Voice</a>
        </div>
    );
};

export default NavBar;