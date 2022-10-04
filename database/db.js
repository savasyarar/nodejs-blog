import mysql from "mysql2";

export const pdo = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
});


module.exports = pdo.promise();