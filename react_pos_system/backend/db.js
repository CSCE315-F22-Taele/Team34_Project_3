const Pool = require("pg").Pool;

/**
 * Represents the pool object
 * @constructor
 * @author @AakashHaran
 * @param {Object} credentials - database credentials
 */
const pool = new Pool({
    user: "csce315_914_haran",
    password: "password",
    host: "csce-315-db.engr.tamu.edu",
    port: 5432,
    database: "csce315_914_34",
    ssl: {rejectUnauthorized: false}
});

module.exports = pool;