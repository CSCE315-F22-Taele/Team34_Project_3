import menu from '../styles/universal/Menu.module.css';
import NavBar from '../components/universal/NavBar'
import MenuNavBar from '../components/universal/MenuNavBar';
import MenuItemCard from '../components/universal/MenuItemCard';
import items from './data'
import React, {useState} from "react";

const navItems = [
  { navItemName: "Home", route: "/" },
  { navItemName: "Menu", route: "/menu" },
  { navItemName: "Find", route: "/find" },
];

export default function Home(props) {
  const [myitems, setItems ] = useState(items.filter((item) => item.item_type === "Entree"));
  return (
    <div style={{ overflow: 'hidden', height: 'fit-content', paddingBottom: '10%'}}>
      <NavBar navItems={navItems} isCustomer={false} />
      <MenuNavBar menuNavBar myitems ={items} setItems = {setItems} ></MenuNavBar> 
      
      <div className = {menu.gridcontainer}> 
          {myitems.map((item) => {return <MenuItemCard className = {menu.griditem} item = {item}></MenuItemCard>})}
      </div>
    </div>
  );
};
