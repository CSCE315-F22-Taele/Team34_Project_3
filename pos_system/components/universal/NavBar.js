import styles from '../../styles/universal/Navbar.module.css';
import chickfila from '../../assets/navbar-loog.png';
import Image from 'next/image';

function placeCart(isCustomer) {
    if (isCustomer)
        return <a className={styles.accessibility}>Cart logo</a>
}

const NavBar = (props) => {
    return (
        <div className={styles.topnav}>
            <div className={styles.logo}  href="/"><Image src={chickfila} width={170} height={100} /></div>
            {props.navItems.map(navItem => {
                return <a href={navItem.route}>{navItem.navItemName}</a>
            })}
            {placeCart(props.isCustomer)}
            <a className={styles.accessibility}>Color</a>
            <a className={styles.accessibility}>Voice</a>
        </div>
    );
};

export default NavBar;