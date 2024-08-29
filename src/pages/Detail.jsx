import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

const Detail = ({params}) => {
  const data = useLoaderData()
  const {id,title,image,author,content,published_date
  } = data[0]
  console.log(data)
  return (
    <div>
      <div className='w-full py-12 px-10  mx-auto'>
            <div className='w-3/4 mx-auto'>
            
                <img src={image} alt="border" className='w-full h-80'/>
                <div className='flex space-x-11 mt-3'>
                <p className='inline-flex items-center gap-3 text-gray-600'><FaUserAlt /> Author : {author}</p>
                <p className='flex items-center gap-3 text-gray-600'> Published {published_date}</p>
                </div>
                <h1 className='my-8 text-2xl font-bold text-red-500'>{title}</h1>
                <p className='mt-7'>{content}</p>
                <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam a accusantium, reprehenderit, dolores molestias doloribus atque dolorum, aspernatur mollitia ipsam numquam amet. Assumenda laborum ab nihil velit cupiditate. Enim?</p>
                <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam a accusantium, reprehenderit, dolores molestias doloribus atque dolorum, aspernatur mollitia ipsam numquam amet. Assumenda laborum ab nihil velit cupiditate. Enim?</p>
                <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam a accusantium, reprehenderit, dolores molestias doloribus atque dolorum, aspernatur mollitia ipsam numquam amet. Assumenda laborum ab nihil velit cupiditate. Enim?</p>
            </div>
      </div>
    </div>
  )
}

export default Detail
