import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full bg-black text-white text-center px-12 py-12'>
        <h1 className='text-5xl lg:text-7xl mb-5 font-bold bg-gradient-to-r from-orange-500 to-gray-400 bg-clip-text text-transparent'>Welcome to Our Blog</h1>
        <p className='mb-5 mx-auto md:w-3/5 text-gray-400'>Start your blog today and join community of writers and readers who are possianote to share their stories and ideas.We offer eerything you need to get started, from helpful tips and tutorials.</p>
        <div>
            <button className='bg-orange-400 px-6 py-3 rounded-lg font-semibold'> <Link to='/'>Learn More</Link></button>
        </div>
      
    </div>
  )
}

export default Hero
