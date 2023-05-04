import express from "express";
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "741147",
    database: "dbtech1"
})

con.connect(function (err) {
    if (err) {
        console.log("Error in Connection", err);
    } else {
        console.log("Connected")
    }
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email=? AND password=?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.json({
                Status: "Error in server,", Error: "Error in running query"
            })
        } else if (result.length > 0) {
            return res.json({
                Status: "Success"
            })
        } else {
            return res.json({
                Status: "Error in server,", Error: "Wrong Email or Password"
            })
        }
    })
})

app.post('/create', (req,res) => {
    console.log(req.file);
})

app.listen(8081, () => {
    console.log("Running")
}) 