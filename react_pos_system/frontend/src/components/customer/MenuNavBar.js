import '../../styles/customer/menunavbar.css';

export function setItembyType(items, setItems, type) {
    const new_items = items.filter((item) => item.item_type === type);
    console.log(new_items)
    setItems(new_items);
  }

const MenuNavBar = (props) => {
    return (
        <div className={"menutopnav"}>
            <div className="menutopnav-centered">
                <button className="active" onClick={() => setItembyType(props.myitems, props.setItems, "Entree")}>Entrees</button>
                <button className="active" onClick={() => setItembyType(props.myitems, props.setItems, "Drinks")}>Drinks</button>
                <button className="active" onClick={() => setItembyType(props.myitems, props.setItems, "Treats")}>Treats</button>
            </div>

        </div>
    );
};

export default MenuNavBar;