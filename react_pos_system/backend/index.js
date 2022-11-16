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

// get all menu items route
app.get("/allitems", async (req, res) => {
    try {
        const getAllItemsQuery = "SELECT * FROM orders;";
        const allItems = await pool.query(getAllItemsQuery);
        res.status(200).json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
})