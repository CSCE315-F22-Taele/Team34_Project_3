const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Started listening on PORT ${PORT}`);
});

/**
 * get request for all items
 * @function
 * @author @AakashHaran
 * @param {Object} req - request from client
 * @param {Object} res - response object from server
 */
app.get("/allitems", async (req, res) => {
    try {
        const getAllItemsQuery = "SELECT * FROM items ORDER BY item_id;";
        const allItems = await pool.query(getAllItemsQuery);
        console.log("Getting All items! ")
        res.status(200).json(allItems.rows);
        
    } catch (err) {
        console.error(err.message);
    }
})


/**
 * get request for all frequent pairs
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/frequentpairs", async (req, res) => {
    try {
        const getFrequentPairsQuery = "select t1.item_id as first_item, t2.item_id as second_item, count(distinct t1.order_id) as num_orders \
        from order_item t1 join order_item t2 on t1.order_id = t2.order_id and t1.item_id < t2.item_id \
        group by t1.item_id, t2.item_id order by num_orders desc";

        const allPairs = await pool.query(getFrequentPairsQuery);
        res.status(200).json(allPairs.rows);

    } catch (error) {
        console.log("ERROR IN FREQUENT PAIRS API CALL");
        console.error(error.message);
    }
})


/**
 * get request for all employees
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/allemployees", async (req, res) => {
    try {
        const getAllEmployeesQuery = "SELECT * FROM employees;";
        const allemployees = await pool.query(getAllEmployeesQuery);
        res.status(200).json(allemployees.rows);
    } catch (err) {
        console.error(err.message);
    }
})


/**
 * get request for all ingredients
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/allingredients", async (req, res) => {
    try {
        const getAllIngredientsQuery = "SELECT * FROM ingredients order by ingredients_id;";
        const allIngredients = await pool.query(getAllIngredientsQuery);
        res.status(200).json(allIngredients.rows);
    } catch (err) {
        console.error(err.message);
    }
})


/**
 * get request for all orders
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/allorders", async (req, res) => {
    try {
        const getAllIngredientsQuery = "SELECT * FROM orders order by order_id;";
        const allIngredients = await pool.query(getAllIngredientsQuery);
        res.status(200).json(allIngredients.rows);
    } catch (err) {
        console.error(err.message);
    }
})



/**
 * get request for health check
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/test", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        console.error(err.message);
    }
})


/**
 * post request for login
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.get("/login", async (req, res) => {
    // const { email, password } = req.body;
    const email = req.query.email;
    const password = req.query.password;

    console.log(email, password)

    const getServerQuery = `SELECT * FROM employees WHERE email = '${email}' AND password = '${password}' AND emp_role != 'manager'`;
    const getManagerQuery = `SELECT * FROM employees WHERE email = '${email}' AND password = '${password}' AND emp_role = 'manager'`;

    try {
        const isServer = await (await pool.query(getServerQuery)).rows.length > 0;
        const isManager = await (await pool.query(getManagerQuery)).rows.length > 0;

        if (isServer) {
            res.status(200).json({ "role": "server" })
        } else if (isManager) {
            res.status(200).json({ "role": "manager" })
        } else {
            res.status(200).json({ "role": "logged_out" })
        }
    } catch (error) {
        console.error(error.message);
    }
})


/**
 * post request for adding item
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.post("/additem", async (req, res) => {
    const { itemName, price, ingredients, quantities, type } = req.body;
    const getMaxID = 'SELECT MAX(item_id) FROM items';
    const newId = await (await pool.query(getMaxID)).rows[0].max;
    const addItemQuery = `INSERT INTO items (item_id, item_name, item_price, item_type, item_ingredients, item_quantities) VALUES \
    (${newId + 1}, '${itemName}', ${price}, '${type}', '{${ingredients}}', '{${quantities}}');`;

    try {
        await pool.query(addItemQuery);
        res.status(200).json({ "Status": "Success" });
    } catch (error) {
        console.error(error.message);
    }
})


/**
 * post request for adding ingredient
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.post("/addingredient", async (req, res) => {
    const { name, stock, minAmount } = req.body;
    const getMaxID = 'SELECT MAX(ingredients_id) FROM ingredients';
    const newId = await (await pool.query(getMaxID)).rows[0].max;
    const addItemQuery = `INSERT INTO ingredients (ingredients_id, ingredients_name, ingredients_stock, min_amount) VALUES \
    (${newId + 1}, '${name}', ${stock}, '${minAmount}');`;

    console.log(addItemQuery)

    try {
        await pool.query(addItemQuery);
        res.status(200).json({ "Status": "Success" });
    } catch (error) {
        console.error(error.message);
    }
})


/**
 * post request for updating ingredient
 * @method
 * @author @AakashHaran
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.post("/updatestock", async (req, res) => {
    const { ingredientID, name, stock, minAmount } = req.body;
    const updateItemQuery = `UPDATE ingredients SET ingredients_name='${name}', ingredients_stock=${stock}, min_amount=${minAmount} WHERE ingredients_id=${ingredientID}`;

    console.log(updateItemQuery)

    try {
        await pool.query(updateItemQuery);
        res.status(200).json({ "Status": "Success" });
    } catch (error) {
        console.error(error.message);
    }
})


/**
 * post request for adding order
 * @method
 * @author @OmarIrshad
 * @param {Object} req - request from client
 * @param {Object} res - response object from server
 */
app.post("/server_addOrder", async (req, res) => {
    const {items ,totalPrice, customerName, employeeName} = req.body;
    const getMaxOrderIDQuery = 'SELECT MAX(order_id) FROM orders;';
    const newOrderID = (await (await pool.query(getMaxOrderIDQuery)).rows[0].max) + 1;

    const addToOrdersQuery = `INSERT INTO orders (order_id, customer_name, total_price, employee) VALUES \
    (${newOrderID},'${customerName.customerName}', '${totalPrice}', '${employeeName.employeeName}' ) ;`;

    console.log(addToOrdersQuery);
    //Add orders Query
    try {
        await pool.query(addToOrdersQuery);
        // res.status(200).json({ "Status": "Success" });
    } catch (error) {
        console.error(error.message);
    }
    // Add Items -> Order items
    for(let i = 0; i < items.length; i++) {
        var obj = items[i];

        //Ingredients Query
        console.log(obj);
        for(let i = 0; i < obj.item.item_ingredients.length; i++) {

            const decrementIngredientQuery = `UPDATE ingredients SET ingredients_stock = ingredients_stock - ${obj.item.item_quantities[i]} WHERE ingredients_id =  ${obj.item.item_ingredients[i]};`;
            
            try {
                await pool.query(decrementIngredientQuery);
            } catch (error) {
                console.error(error.message);
            }
        }

        const addToOrderQuery = `INSERT INTO order_item (order_id, item_id, item_quantity, total_price) VALUES \
        (${newOrderID}, '${obj.item.item_id}', '${obj.quantity}', '${obj.item_total_price}')`

        //Qeury Order items
        try {
            await pool.query(addToOrderQuery);
            // res.status(200).json({ "Status": "Success" });
        } catch (error) {
            console.error(error.message);
        }
    }

    res.status(200).json({ "Status": "Success" });



})


/**
 * post request for adding order
 * @method
 * @author @OmarIrshad
 * @param {Object} req - request from client
 * * @param {Object} res - response object from server
 */
app.post("/customer_addOrder", async (req, res) => {
    const {items ,totalPrice, customerName, employeeName} = req.body;
    const getMaxOrderIDQuery = 'SELECT MAX(order_id) FROM orders;';
    const newOrderID = (await (await pool.query(getMaxOrderIDQuery)).rows[0].max) + 1;

    const addToOrdersQuery = `INSERT INTO orders (order_id, customer_name, total_price, employee) VALUES \
    (${newOrderID},'${customerName.customerName}', '${totalPrice}', '${employeeName}' ) ;`;

    console.log(addToOrdersQuery);
    //Add orders Query
    try {
        await pool.query(addToOrdersQuery);
        // res.status(200).json({ "Status": "Success" });
    } catch (error) {
        console.error(error.message);
    }
    // Add Items -> Order items
    for(let i = 0; i < items.length; i++) {
        var obj = items[i];

        //Ingredients Query
        console.log("Customer");
        console.log(obj);
        for(let i = 0; i < obj.item_ingredients.length; i++) {

            const decrementIngredientQuery = `UPDATE ingredients SET ingredients_stock = ingredients_stock - ${obj.item_quantities[i]} WHERE ingredients_id =  ${obj.item_ingredients[i]};`;
            
            try {
                await pool.query(decrementIngredientQuery);
            } catch (error) {
                console.error(error.message);
            }
        }

        const addToOrderQuery = `INSERT INTO order_item (order_id, item_id, item_quantity, total_price) VALUES \
        (${newOrderID}, '${obj.item_id}', '${obj.quantity}', '${obj.item_total_price}')`

        //Qeury Order items
        try {
            await pool.query(addToOrderQuery);
            // res.status(200).json({ "Status": "Success" });
        } catch (error) {
            console.error(error.message);
        }
    }

    res.status(200).json({ "Status": "Success" });



})


