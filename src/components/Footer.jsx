import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  mx-auto bg-gray-900 text-white'>
      <div className='grid md:grid-cols-5 grid-cols-1 sm:grid-cols-2 px-12 py-24 '>
        <div>
          <h1 className='font-bold text-2xl mb-3 text-orange-500'>Links</h1>
          <ul className='flex flex-col gap-4'>
            <li>Home </li>
            <li>About </li>
            <li>Blogs </li>
            <li>Contact </li>
          </ul>
        </div>
        <div className='mb-5'>
          <h1 className='font-bold text-2xl mb-3  text-orange-500'>Links</h1>
          <ul className='flex flex-col gap-4'>
            <li>Home </li>
            <li>About </li>
            <li>Blogs </li>
            <li>Contact </li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-2xl mb-3  text-orange-500'>Links</h1>
          <ul className='flex flex-col gap-4'>
            <li>Home </li>
            <li>About </li>
            <li>Blogs </li>
            <li>Contact </li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-2xl mb-3  text-orange-500'>Links</h1>
          <ul className='flex flex-col gap-4'>
            <li>Home </li>
            <li>About </li>
            <li>Blogs </li>
            <li>Contact </li>
          </ul>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl font-bold mb-8t  text-orange-500'>Subscribe</h1>
          <div className='w-full '>
            <form action="">
            <input className='h-7 px-5 py-7 bg-transparent border border-gray-600  my-5 w-full rounded-md' type="text" name='subscribe' id='subscribe' placeholder='Say Something..'/>
              <button type='submit' className='bg-orange-500 px-4 py-2 rounded-md hover:bg-white hover:text-orange-500 transition-all duration-500 w-full'>Submit</button>
            </form>
          </div>
        </div>
       
      </div>
      <hr />
      <div className='px-6 py-6'>
        <h1>Copy Right By Abdul Ahad</h1>
      </div>
      
    </div>
  )
}

export default Footer
