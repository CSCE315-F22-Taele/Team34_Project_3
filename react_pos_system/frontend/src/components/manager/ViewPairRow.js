const ViewPairRow = ({pair}) => {
    return (
        <tr>
            <td>{pair.first_item}</td>
            <td>{pair.second_item}</td>
            <td>{pair.num_orders}</td>
        </tr>
    )
}
 
export default ViewPairRow;