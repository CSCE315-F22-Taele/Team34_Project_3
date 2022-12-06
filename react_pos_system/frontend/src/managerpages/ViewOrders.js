import ViewOrderRow from "../components/manager/VIewOrderRow";
import { useState, useEffect } from "react";

export const getOrders = async (setItems) => {
    const getItemsAPI = "http://localhost:5001/allorders";
    await fetch(getItemsAPI)
        .then((response) => response.json())
        .then((data) => setItems(data));
}

const ViewOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders(setOrders);
    }, [])

    return (
        <>
            <div className={"container"} style={{ marginTop: '5%' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Transaction Price</th>
                            <th scope="col">Transaction Date</th>
                            <th scope="col">Done by Employee</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return <ViewOrderRow order={order} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewOrders;