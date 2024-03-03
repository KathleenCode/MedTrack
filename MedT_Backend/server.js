import express from "express";
import cors from "cors";
import morgan from "morgan";
import dbConnection from "./db.js";
import pharmRoute from './router/pharmRoute.js'
import labRoute from './router/labRoute.js'
import { pharmDB } from "./seeds/pharmSeeds.js";
import { labDB } from "./seeds/labSeeds.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/medicines', pharmRoute)
app.use('/api/equipment', labRoute)


pharmDB();
labDB();

app.listen(PORT, () => {
    dbConnection()
    console.log(`Server started on port ${PORT}`)
})