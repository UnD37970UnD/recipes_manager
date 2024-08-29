import mongoose, { Schema } from "mongoose";


const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        ingredients:[
            {
                ingredient: {
                    type: String,
                    required: true,
                },
                amount: {
                    type: Number,
                    required: true,
                },
                CoM: {
                    type: String,
                    required: true,
                },
            },
        ],

    }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);