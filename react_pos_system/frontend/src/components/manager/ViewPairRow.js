const ViewPairRow = ({pair}) => {
    return (
        <tr>
            <td><b>{pair.first_item}</b></td>
            <td>{pair.second_item}</td>
            <td>{pair.num_orders}</td>
        </tr>
    )
}
 
export default ViewPairRow;