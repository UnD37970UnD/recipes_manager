import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateRecipe from '../pages/CreateRecipe';
import ShowRecipe from '../pages/ShowRecipe';
import EditRecipe from '../pages/EditRecipe';
import DeleteRecipe from '../pages/DeleteRecipe';

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recipes/create' element={<CreateRecipe />}/>
    <Route path='/recipes/delete/:id' element={<DeleteRecipe />}/>
    <Route path='/recipes/edit/:id' element={<EditRecipe />}/>
    <Route path='/recipes/details/:id' element={<ShowRecipe />}/>
    </Routes>
  );
};

export default App