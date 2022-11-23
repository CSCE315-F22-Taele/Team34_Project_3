import { useState, useEffect } from "react";
import ViewItemRow from "../components/manager/ViewItemRow";

const data = [
    {
        id: 1,
        item: 'Lettuce',
        type: 'Entree',
        price: 15.0,
        month_sales: 1250
    },
    {
        id: 2,
        item: 'Bread',
        type: 'Treat',
        price: 12.5,
        month_sales: 125
    },
    {
        id: 3,
        item: 'Tomatoes',
        type: 'Drink',
        price: 5.5,
        month_sales: 250
    },
]

export const getItems = async (setItems) => {
    const getItemsAPI = "http://localhost:5001/allitems";
    await fetch(getItemsAPI)
        .then((response) => response.json())
        .then((data) => setItems(data));
}

const ViewStock = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems(setItems);
    })

    return (
        <>
            <div className={"container"} style={{marginTop: '5%'}}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Item</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sales in last month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                            return <ViewItemRow item={item} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewStock;