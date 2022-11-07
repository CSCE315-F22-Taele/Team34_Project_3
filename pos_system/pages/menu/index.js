import NavBar from '../../components/universal/NavBar';


const navItems = [
  { navItemName: "Home", route: "/" },
  { navItemName: "Menu", route: "/menu" },
  { navItemName: "Find", route: "/find" }
];

export default function FindPage() {
  return (
    <div>
      <NavBar navItems={navItems} isCustomer={false} />
      <h1>Menu</h1>
    </div>
  );
};