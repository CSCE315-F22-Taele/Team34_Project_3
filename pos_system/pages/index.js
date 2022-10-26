import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
      <h1>ENTRY POINT</h1>
    </div>
  );
};
