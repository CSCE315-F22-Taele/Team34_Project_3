const ViewIngredientRow = ({ item }) => {
    if (item.ingredients_stock < item.min_amount) {
        return (
            <tr style={{ color: "red" }} className="table-danger">
                <td><b>{item.ingredients_id}</b></td>
                <td>{item.ingredients_name}</td>
                <td>{item.ingredients_stock}</td>
                {/* <td>{item.last_ordered}</td> */}
            </tr>
        )
    } else if (item.ingredients_stock > item.min_amount * 1.1) {
        return (
            <tr style={{color: "green"}} className="table-success">
                <td><b>{item.ingredients_id}</b></td>
                <td>{item.ingredients_name}</td>
                <td>{item.ingredients_stock}</td>
                {/* <td>{item.last_ordered}</td> */}
            </tr>
        )
    } else {
        return (
            <tr>
                <td><b>{item.ingredients_id}</b></td>
                <td>{item.ingredients_name}</td>
                <td>{item.ingredients_stock}</td>
                {/* <td>{item.last_ordered}</td> */}
            </tr>
        )
    }
}

export default ViewIngredientRow;