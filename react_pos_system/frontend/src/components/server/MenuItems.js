import { useState, useEffect } from "react";
import { getItems } from "../../managerpages/ViewItems";

const addToOrder = (cart, setCart, newItem) => {
    let cartIndex = -1;

    if (cart.length !== 0) {
        cartIndex = cart.findIndex(cartItem => {
            return cartItem.item.item_id === newItem.item_id;
        });
    }
    
    if (cartIndex !== -1) {
        setCart((cart) => cart.map(cartItem => {
            if (cartItem.item.item_id === newItem.item_id) {
                const temp = cartItem;
                temp.quantity += 0.5;
                return temp;
            }
            return cartItem;
        }));
    } else {
        const newOrderItem = {"item": newItem, "quantity": 1}
        setCart((currCart) => [...currCart, newOrderItem]);
        console.log("ADDED NEW ITEM TO CART")
    }
    console.log("CART1", cart);
}

const MenuItems = ({cart, setCart}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems(setItems);
    }, []);    

    return (
        <>
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto"}}>
                {items.map(item => {
                    return <button onClick={() => addToOrder(cart, setCart, item)} style={{margin: '5px 5px 5px 5px', padding: '35px', backgroundColor: 'white', border: "1px solid red", color: "red"}}>{item.item_name}</button>
                })}
            </div>
        </>
    );
}
 
export default MenuItems;