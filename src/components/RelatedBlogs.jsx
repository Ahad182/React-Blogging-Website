import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const RelatedBlogs = ({data}) => {
    return (
        <div>
            <div className='mb-4  p-3 shadow-md bg-gray-200'>
                <h3 className='line-clamp-2 mb-5'>{data.title}</h3>
                <p className='inline-flex items-center gap-3 text-gray-600'><FaUserAlt /> {data.auther}</p>
                <Link to={`/blogs/${data.id}`} className='md:px-4 md:py-2 border border-gray-400 ml-6 px-3 py-2 inline-flex items-center'>Read More</Link>
            </div>
        </div>
    )
}

export default RelatedBlogs
