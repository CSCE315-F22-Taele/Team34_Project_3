import { useState, useEffect } from "react";

const deleteItem = (setCart, item_id) => {
    setCart((cart) => cart.filter((cartItem) => cartItem.item.item_id !== item_id))
}

const ReceiptPanel = ({ cart, setCart, setSubPrice, subPrice, setTotalPrice, totalPrice }) => {
    useEffect(() => {
        console.log("Panel ", cart)
        const price = cart.reduce((a, cartItem) => {
            return a + cartItem.item.item_price * cartItem.quantity;
        }, 0)
    
        setSubPrice(price);
        setTotalPrice(price * 1.0825);
    }, [cart])

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "auto" }}>
                <button onClick={() => setCart([])}>Clear</button>
                <div className="row" style={{ marginTop: '15px' }}>
                    <div className="col"><h5>Order Item</h5></div>
                </div>
                {cart.map(cartItem => {
                    return (
                        <div className="row">
                            <div className="col">{cartItem.item.item_name}</div>
                            <div className="col">{cartItem.quantity}</div>
                            <div className="col"><button onClick={() => deleteItem(setCart, cartItem.item.item_id)}>Delete</button></div>
                        </div>
                    )
                })}
                <h5 style={{ marginTop: '15%' }}>Total Price: {Number((totalPrice).toFixed(2))}</h5>
                <h5>SubTotal: {Number((subPrice).toFixed(2))}</h5>
                <input type="text" placeholder="Customer Name"></input>
                <button onClick={() => setCart([])}>Place Order</button>
            </div>
        </>
    );
}

export default ReceiptPanel;