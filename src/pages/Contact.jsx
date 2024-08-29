import React from 'react'
import useLoading from '../hooks/IsLoading'
import Loader from '../components/Loader'

const Contact = () => {
  const isLoading=useLoading(2000)
  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <div className='w-full bg-black text-white text-center px-12 py-24'>
        <h1 className='text-5xl  mb-5 font-semibold  bg-gradient-to-r from-orange-500 to-gray-400 bg-clip-text text-transparent'>Contact Us Page</h1>

      </div>

      <div className='w-full  flex items-center justify-center my-9'>
          <div className='messege-container w-full md:w-2/4 border border-red-200 bg-orange-500 text-white p-6 shadow-2xl'>
            <h1 className='text-2xl text-center font-bold'>Contact Us</h1>
            <form action="">
            <div className='w-full mt-5'>
              <label htmlFor="#email" className='font-bold'>Email</label>
              <input className='px-5 py-3 mt-3 rounded-lg w-full' id='email' type="email" name='email' placeholder='Enter Your Name..' />
            </div>
            <div className='w-full mt-5'>
              <label htmlFor="#topic" className='font-bold'>Subject</label>
              <input className='px-5 py-3 mt-3 rounded-lg w-full' id='topic' type="text" name='topic' placeholder='Enter Your Subject' />
            </div>

            <div className='w-full mt-5'>
              <label htmlFor="#message" className='font-bold'>Message</label>
              <textarea className='px-5 py-3 mt-3 rounded-lg w-full' id='message'  name='message' placeholder='Write Your massage..' />
            </div>

            <button className='px-6 py-4 bg-white text-black font-semibold mt-3 rounded-lg'>Submit</button>
            </form>
            
          </div>
      </div>
    </div>
  )
}

export default Contact
