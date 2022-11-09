import Image from 'next/image';
import styles from '../../styles/universal/MenuItemCard.module.css';


const MenuItemCard = ({item}) => {
  return (
    <div className={styles.menuitemcard}>
      
    <div className={styles.img}>
        <Image src={item.image}  height={300} width={220}/>
    </div>

      
      <h4 class = "menu_itemname"> {item.item_name} </h4>
      <p>{item.item_price} </p>
      <p>{item.item_type} </p>
      <button className={styles.button}>Order Now</button>
    </div>
    

  );
};

export default MenuItemCard;