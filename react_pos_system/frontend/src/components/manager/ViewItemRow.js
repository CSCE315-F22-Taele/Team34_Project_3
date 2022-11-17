const ViewItemRow = ({item}) => {
    return (
        <tr>
            <td><b>{item.id}</b></td>
            <td>{item.item}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>{item.month_sales}</td>
        </tr>
    )
}
 
export default ViewItemRow;