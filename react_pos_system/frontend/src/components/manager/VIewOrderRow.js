import MoreOrderItemRow from "./MoreOrderItemRow";

const ViewOrderRow = ({ order }) => {
    return (
        <>
            <tr>
                <td><b>{order.id}</b></td>
                <td>{order.customer_name}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>{order.employee}</td>
                <td>
                    <button style={{ backgroundColor: "#e60e33", border: "none" }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modal" + order.id}>
                        View More
                    </button>
                </td>
            </tr>
            <div class="modal fade" id={"modal" + order.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Details on Order #{order.id}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.order_items.map((order_item) => {
                                        return <MoreOrderItemRow order_item={order_item} />
                                    })}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <b>
                                                {order.order_items.reduce((accumulator, order_item) => {
                                                    return accumulator + order_item.price
                                                }, 0)}
                                            </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ViewOrderRow;