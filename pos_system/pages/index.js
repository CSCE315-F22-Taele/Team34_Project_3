import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/universal/Home.module.css';
import NavBar from '../components/universal/NavBar'

const navItems = [
  { navItemName: "Home", route: "/" },
  { navItemName: "Menu", route: "/menu" },
  { navItemName: "Find", route: "/find" }
];

export default function Home() {
  return (
    <div>
      <NavBar navItems={navItems} isCustomer={false} />
      <div className={styles.container}>
        <div className={styles.sectionleft}>
          <div className={styles.textcontainer}>
            <h1 style={{ fontSize: '80px', fontFamily: 'serif' }}>Order our World Famous Chick-Fil-A Sandwich!</h1>
            <a className={styles.orderbutton}>Order Now!</a>
          </div>
        </div>
        <div className={styles.sectionright}></div>
      </div>
    </div>
  );
};
