import React from 'react'
import { FaDribbbleSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full tetxt-3xl font-bold text-orange-500'>YumEats</h1>
            <p>Welcome to YumEats, your gateway to a world of delectable dishes. Explore, order, and savor the flavors from the comfort of your home with YumEats</p>
            <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
              <FaDribbbleSquare size={30}/>
              <FaFacebookSquare size={30}/>
              <FaGithubSquare size={30}/>
              <FaInstagram size={30}/>
              <FaTwitterSquare size={30}/>
            </div>
        </div>



        
     <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-[gray]'>Location</h6>
         <ul>
            <li className='py-2 text-sm'>Delhi</li>
            <li className='py-2 text-sm'>Punjab</li>
            <li className='py-2 text-sm'>Jharkhand</li>
            <li className='py-2 text-sm'>Mumbai</li>
            


         </ul>



        </div>


        <div>
            <h6 className='font-medium text-[gray]'>Location</h6>
         <ul>
            <li className='py-2 text-sm'>Madhya Pradesh</li>
            <li className='py-2 text-sm'>Kashmir</li>
            <li className='py-2 text-sm'>Arunachal Pradesh</li>
            <li className='py-2 text-sm'>West Bengal</li>
            


         </ul>



        </div>


        <div>
            <h6 className='font-medium text-[gray]'>Location</h6>
         <ul>
            <li className='py-2 text-sm'>Goa</li>
            <li className='py-2 text-sm'>Karnataka</li>
            <li className='py-2 text-sm'>Tamil Nadu</li>
            <li className='py-2 text-sm'>Uttar Pradesh</li>
            


         </ul>



        </div>
     </div>


      </div>
    </div>
  )
}

export default Footer
