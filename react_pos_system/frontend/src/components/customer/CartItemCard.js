const CartItemCard = (props) => {
    return(
       <div className="CartItemCard">
            <img src={props.item.image}  height={500} width={350}/>
            
            <h4 class = "CartItem_Name"> {props.item.item_name} </h4>
            <p>{props.item.item_price} </p>
            <button onClick = {() => props.incrementCartItem(props.cart, props.setCart, props.item.item_id)} className = {"Increment"}> Add </button>
            <button onClick = {() => props.decrementCartItem(props.cart, props.setCart, props.item.item_id)} className = {"Decrement"}> Decrement</button>
            <p> Quantity : {props.item.item_quantity} </p>

        
       
       </div>

        


    );
};

export default CartItemCard; 
