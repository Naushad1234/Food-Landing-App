import React from 'react'

const Delievery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img  className ='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'></img>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get the App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on Demand</h1>
            <p>
            Welcome to our food ordering app, a one-stop solution for all your culinary cravings. 
            Our app offers a wide range of cuisines from local eateries to high-end restaurants, ensuring that there’s something for everyone.
             With an easy-to-navigate interface, users can browse through various food categories, explore menus, and place orders with just a few taps. 
             Real-time tracking allows users to monitor their order from preparation to delivery. Our app also features user reviews and ratings, helping you make informed dining decisions. 
             Additionally, secure payment options and exciting deals make the food ordering experience even more delightful. Join us on this gastronomic journey and enjoy delicious food delivered right to your doorstep!   
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delievery
