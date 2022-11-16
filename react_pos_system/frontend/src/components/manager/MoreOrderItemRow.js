const MoreOrderItemRow = ({order_item}) => {
    return ( 
        <tr>
            <td>{order_item.name}</td>
            <td>{order_item.quantity}</td>
            <td>{order_item.price}</td>
        </tr>
     );
}
 
export default MoreOrderItemRow;