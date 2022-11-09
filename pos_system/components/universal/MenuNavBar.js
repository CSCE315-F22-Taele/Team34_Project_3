
import styles from '../../styles/universal/MenuNavbar.module.css';

export function getItembyType(items, setItems, type) {
    const new_items = items.filter((item) => item.item_type === type);
    console.log(new_items)
    setItems(new_items);
  }

const MenuNavBar = (props) => {
    return (
        <div className={styles.topnav}>
            <div class="topnav-centered">
                <button class="active" onClick={() => getItembyType(props.myitems, props.setItems, "Entree")}>Entrees</button>
                <button class="active" onClick={() => getItembyType(props.myitems, props.setItems, "Drinks")}>Drinks</button>
                <button class="active" onClick={() => getItembyType(props.myitems, props.setItems, "Treats")}>Treats</button>
            </div>

        </div>
    );
};

export default MenuNavBar;