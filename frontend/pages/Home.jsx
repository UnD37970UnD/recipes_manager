import React, {useEffect, useState} from 'react';

import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios
            .get('http://localhost:5555/recipes')
            .then((response)=> {
                setRecipes(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

  return (
    <h1 className='text-3xl font-bold underline'>Hello from Home!</h1>
    // <div className='p-4'>
    //     <div className='flex justify-between items-center'>
    //         <h1 className='text-3xl my-8'>Recipes List</h1>
    //         <Link to='/recipes/create'>
    //             <MdOutlineAddBox className='text-red-800 text-4xl' />
    //         </Link>
    //     </div>
    //     { loading ? (
    //         <Spinner />
    //     ) : (
    //         <table className='w-full border-separate border-spacing-2'>
    //             <thead>
    //                 <tr>
    //                     <th className='border border-slate-600 rounded-md'>No</th>
    //                     <th className='border border-slate-600 rounded-md'>Name</th>
    //                     <th className='border border-slate-600 rounded-md mx-md:hidden'>Duration</th>
    //                     <th className='border border-slate-600 rounded-md'>Operations</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {recipes.map((recipe, index) => (
    //                     <tr key={recipe._id} className='h-8'>
    //                         <td className='border border-slate-700 rounded-md text-center'>
    //                             {index+1}
    //                         </td>
    //                         <td className='border border-slate-700 rounded-md text-center'>
    //                             {recipe.name}
    //                         </td>
    //                         <td className='border border-slate-700 rounded-md text-center mx-md:hidden'>
    //                             {recipe.duration}
    //                         </td>
    //                         <td className='border border-slate-700 rounded-md text-center mx-md:hidden'>
    //                             <div className='flex justify-center gap-x-4'>
    //                                 <Link to={`/recipes/details/${recipe._id}`}>
    //                                     <BsInfoCircle className='text-2x1 text-green-800' />
    //                                 </Link>
    //                                 <Link to={`/recipes/edit/${recipe._id}`}>
    //                                     <AiOutlineEdit className='text-2x1 text-yellow-800' />
    //                                 </Link>
    //                                 <Link to={`/recipes/delete/${recipe._id}`}>
    //                                     <MdOutlineDelete className='text-2x1 text-red-800' />
    //                                 </Link>
    //                             </div>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     )
    //     }
    // </div>
  )
}

export default Home