import ViewOrderRow from "../components/manager/VIewOrderRow";
import { useState, useEffect } from "react";

const data = [
    {
        id: 1,
        customer_name: 'John Doe',
        price: 25.0,
        employee: 'Employee 1',
        date: '2022-10-07',
        order_items:
            [
                {
                    id: 1,
                    name: "CFA Chicken",
                    quantity: 2,
                    price: 15
                },
                {
                    id: 2,
                    name: "CFA Spicy",
                    quantity: 1,
                    price: 10
                },
            ]
    },
    {
        id: 2,
        customer_name: 'Montague Christoff',
        price: 10.0,
        employee: 'Employee 2',
        date: '2022-11-08',
        order_items:
            [
                {
                    id: 2,
                    name: "CFA Spicy",
                    quantity: 1,
                    price: 10
                },
            ]
    },
    {
        id: 3,
        customer_name: 'Godfrey Williamson',
        price: 50.0,
        employee: 'Employee 3',
        date: '2022-09-07',
        order_items:
            [
                {
                    id: 1,
                    name: "CFA Chicken",
                    quantity: 2,
                    price: 15
                },
                {
                    id: 2,
                    name: "CFA Spicy",
                    quantity: 1,
                    price: 10
                },
                {
                    id: 12,
                    name: "Coke",
                    quantity: 3,
                    price: 25
                },
            ]
    },
]

const ViewOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders(data);
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