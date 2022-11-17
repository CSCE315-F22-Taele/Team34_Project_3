const ViewIngredientRow = ({ item }) => {
    if (item.current_stock < item.on_hand) {
        return (
            <tr style={{ color: "red" }} className="table-danger">
                <td><b>{item.id}</b></td>
                <td>{item.item}</td>
                <td>{item.current_stock}</td>
                <td>{item.last_ordered}</td>
            </tr>
        )
    } else if (item.current_stock > item.on_hand * 1.1) {
        return (
            <tr style={{color: "green"}} className="table-success">
                <td><b>{item.id}</b></td>
                <td>{item.item}</td>
                <td>{item.current_stock}</td>
                <td>{item.last_ordered}</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td><b>{item.id}</b></td>
                <td>{item.item}</td>
                <td>{item.current_stock}</td>
                <td>{item.last_ordered}</td>
            </tr>
        )
    }
}

export default ViewIngredientRow;