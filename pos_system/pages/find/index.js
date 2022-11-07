import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/universal/NavBar'
import Map from '../../components/universal/mapUI'

const navItems = [
  { navItemName: "Home", route: "/" },
  { navItemName: "Menu", route: "/menu" },
  { navItemName: "Find", route: "/find" }
];

export default function FindPage() {
  return (
    <div>
      <NavBar navItems={navItems} isCustomer={false} />
      <h1>Find Nearest Location</h1>
      <Map></Map>
    </div>
  );
};