import React from 'react'
import BlogContainer from '../components/BlogContainer'
import { useNavigation } from 'react-router-dom'
import useLoading from '../hooks/IsLoading'
import Loader from '../components/Loader'

const Blog = () => {
  const Loding = useLoading(2000)
  
  return (
    <>
    <div className='w-full bg-black text-white text-center px-12 py-24'>
      <h1 className='text-5xl  mb-5 font-semibold  bg-gradient-to-r from-orange-500 to-gray-400 bg-clip-text text-transparent  animate-pulse '>Blog Page</h1>

    </div>
    {/* blogs  */}
    <div>
      {Loding?<Loader/>:<BlogContainer/>}
      
    </div>
    </>
  )
}

export default Blog
