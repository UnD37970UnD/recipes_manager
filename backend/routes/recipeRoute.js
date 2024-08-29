import express from 'express';
import { Recipe } from '../models/recipeModel.js';
const router = express.Router();


router.post('/', async (request,response) =>{
    try {
        if(!request.body.name || !request.body.duration || !request.body.ingredients)
            {
                return response.status(400).send({
                    message: "Send all required fields: name, duration, ingredients",
                });
            }
        const newRecipe = {
            name: request.body.name,
            duration: request.body.duration,
            ingredients: request.body.ingredients,
        };

        const recipe = await Recipe.create(newRecipe);
        return response.status(201).send(recipe);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/', async (request, response) => {
    try {
        const recipes = await Recipe.find({});

        return response.status(200).json({
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const recipe = await Recipe.findById(id);

        return response.status(200).json(recipe);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
router.put('/:id', async (request, response) => {
    try{
        if(request.body.name || request.body.duration || request.body.ingredients)
            {
                const { id } = request.params;
                const result = await Recipe.findByIdAndUpdate(id, request.body);
                if (!result) {
                    return response.status(404).json({message:"Recipe not found"});
                }
                return response.status(200).send({message: "Recipe updated"});    
            }
        return response.status(400).send({
            message: "Send all required fields: name, duration, ingredients",
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }   
});

router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Recipe.findByIdAndDelete(id, request.body);
                if (!result) {
                    return response.status(404).json({message:"Recipe not found"});
                }
                return response.status(200).send({message: "Recipe deleted"});    
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;