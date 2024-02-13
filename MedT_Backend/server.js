import express from "express";
import morgan from "morgan";
import dbConnection from "./db.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT;


app.use(morgan('dev'));
app.use(express.json());


app.listen(PORT, () => {
    dbConnection()
    console.log(`Server started on port ${PORT}`)
})