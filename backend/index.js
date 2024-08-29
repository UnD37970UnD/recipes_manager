import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Recipe } from "./models/recipeModel.js";
import recipeRoute from "./routes/recipeRoute.js";
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome...');
});

app.use('/recipes',recipeRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to db');
        app.listen(PORT, ()=> {
            console.log(`open on port: ${PORT}`);
        });
    })
    .catch((error) => {console.log(error)});