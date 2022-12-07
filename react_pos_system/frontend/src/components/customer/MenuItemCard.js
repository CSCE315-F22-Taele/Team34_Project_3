import '../../styles/customer/menuitemcard.css';


const MenuItemCard = (props) => {

  props.item.item_quantity = 1;
  return (
    <div className={"menuitemcard"}>
      
    <div className={"img"}>
        <img src={props.item.image_url}  height={500} width={350}/>
    </div>
    
      <h4 class = "menu_itemname"> {props.item.item_name} </h4>
      <p>{props.item.item_price} </p>
      <p>{props.item.item_type} </p>
      <button onClick={() => props.addToCart(props.item, props.cart,props.setCart, props.item.item_id,)} className={"button"}>Order now</button>
    </div>
    

  );
};

export default MenuItemCard;