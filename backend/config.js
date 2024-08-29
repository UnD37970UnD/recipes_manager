import "dotenv/config.js";

export const PORT = 5555;


export const mongoDBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/recipes_collection?retryWrites=true&w=majority&appName=Recipes-db`;