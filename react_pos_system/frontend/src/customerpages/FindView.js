import NavBar from '../components/universal/NavBar';
import Map from '../components/universal/mapUI'
import React from 'react'
const navItems = [
  { navItemName: "Menu", route: "/menu" },
  { navItemName: "Find", route: "/find" }
];

export default function FindPage() {
  return (
    <div>
      <NavBar navItems={navItems} isCustomer={false} home={"/"} />
      <h1>Find Nearest Location</h1>
      <Map></Map>
    </div>
  );
};