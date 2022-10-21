const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
