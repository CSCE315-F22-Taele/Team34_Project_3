import NavBar from "../components/universal/NavBar";
import { useState, useEffect } from "react";
import ViewIngredientsRow from "../components/manager/ViewIngredientsRow";

const data = [
    {
        id: 1,
        item: 'Lettuce',
        current_stock: 150,
        on_hand: 16,
        last_ordered: '2022-10-07'
    },
    {
        id: 2,
        item: 'Bread',
        current_stock: 125,
        on_hand: 124,
        last_ordered: '2022-11-08'
    },
    {
        id: 3,
        item: 'Tomatoes',
        current_stock: 55,
        on_hand: 70,
        last_ordered: '2022-09-06'
    },
]

const getIngredients = async (setIngredients) => {
    const getIngredientsAPI = "http://localhost:5001/allingredients";
    await fetch(getIngredientsAPI)
        .then((response) => response.json())
        .then((data) => setIngredients(data));
}

const ViewItems = () => {
    const [Ingredients, setIngredients] = useState([]);

    useEffect(() => {
        // setIngredients(data)
        getIngredients(setIngredients);
    }, [])

    return (
        <>
            <div className={"container"} style={{marginTop: '5%'}}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Item</th>
                            <th scope="col">Current Stock</th>
                            <th scope="col">Last Ordered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ingredients.map((item) => {
                            return <ViewIngredientsRow item={item} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewItems;