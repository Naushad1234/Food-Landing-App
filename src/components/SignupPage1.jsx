import React from 'react'

const SignupPage1 = () => {
  return (
    <div className='sm:grid grid-cols-12 h-screen'>

      <div className='hidden sm:block col-span-4 h-screen '>
        <img className='h-screen w-full' src="aenoxySingupImage.jpg"/>
      </div>

      <div className='col-span-8 mt-16 sm:mt-0 bg-white flex justify-center items-center'>

        <div className=' w-[60%] sm:w-[50%] my-2 '>
            <h1 className=' text-2xl sm:text-3xl font-bold '>Sign up to Dribble</h1>

            <form className='mt-10' >
                <div className=' lg:flex my-7 justify-between'>

                    <div className='flex flex-col w-full'>
                     <label className='font-bold sm:text-lg'>Name</label>
                     <input className='p-2 bg-gray-100 shadow-sm rounded-lg' type="text" placeholder='enter name'/>
                    </div>
                    <div  className='flex flex-col mt-7 lg:mt-0 lg:ml-5 w-full'>
                     <label className='font-bold sm:text-lg ' >Username</label>
                     <input className='p-2 rounded-lg bg-gray-100 shadow-sm ' type="text" placeholder='enter username'/>
                    </div> 

                </div>
                <div className='flex flex-col my-7'>
                    <label className='font-bold sm:text-lg ' >Email</label>
                    <input className='p-2 rounded-lg bg-gray-100 shadow-sm' type="text" placeholder='enter email'/>
                </div>
                <div className='flex  flex-col my-7'>
                    <label className='font-bold sm:text-lg' >Password</label>
                    <input className='p-2 rounded-lg bg-gray-100 shadow-sm ' type="text" placeholder='enter password'/>
                </div>

                <div className='flex mb-2 text-slate-500 '>
                    <div className=''> <input className=' h-3 w-3 sm:w-5 sm:h-6' type='checkbox'/> </div> 
                    <div className=' text-sm sm:text-base font-medium ml-3'>Creating an account means you're okay with our 
                      <span className='text-purple-700' > Terms of Service Privacy Policy</span>
                       and our default <span className='text-purple-700' >Notification Settings</span> 
                    </div>
                </div>

                <button className='p-2 my-7 px-5 sm:px-10 font-medium text-white rounded-lg bg-pink-600'> Create Account </button>

                <div className='text-xs sm:text-sm font-medium text-gray-500'>
                    <p>This site is protected by reCAPTCHA and the Google <span className='text-purple-700'> Privacy Policy </span > and <span className='text-purple-700'>Terms of Service</span> apply</p>
                </div>

            </form>
        </div>

      </div>
    </div>
  )
}

export default SignupPage1