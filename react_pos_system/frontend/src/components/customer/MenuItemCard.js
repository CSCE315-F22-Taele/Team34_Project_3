import '../../styles/customer/menuitemcard.css';

const MenuItemCard = ({item}) => {
  return (
    <div className={"menuitemcard"}>
      
    <div className={"img"}>
        <img src={item.image}  height={500} width={350}/>
    </div>
      <h4 class = "menu_itemname"> {item.item_name} </h4>
      <p>{item.item_price} </p>
      <p>{item.item_type} </p>
      <button className={"button"}>Order now</button>
    </div>
    

  );
};

export default MenuItemCard;