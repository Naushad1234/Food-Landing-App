import React from 'react';
import { mealData } from '../data/data';
import { useState } from 'react';


const Meal = () => {

  const[foods, setFoods] = useState(mealData);
   
  const filterCategory = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    )
  }





  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-yellow-500 font-bold text-2xl text-center py-2'>Top Meals</h1>

      <div className='flex flex-col lg:flex-row justify-center'>
      <div className='flex  md:justify-center'>
       <button onClick ={() => setFoods(mealData)} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-red-700'>All</button>
       <button onClick = {() => filterCategory('pizza')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-red-700'>Pizza</button>
       <button onClick = {() => filterCategory('salad')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-red-700'>Salad</button>
       <button onClick = {() => filterCategory('chicken')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-red-700'>Chicken</button>
        </div>
        </div>




      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {foods.map((item) => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} 
            className='w-full h-[200px] object-cover rounded-lg'/>
            <div className='flex justify-between py-2 px-4'> 
            <p className='font-bold'>{item.name}</p>
            <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p> 
            </div>

          


          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;

