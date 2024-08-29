import React from 'react'
import { FaClock, FaUser, FaUserAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import RelatedBlogs from './RelatedBlogs'

const BlogCard = ({ data, selectedCategory, pageSize, currentPage }) => {
    
    const blogs = data.filter((ele)=> !selectedCategory || ele.category===selectedCategory).
    slice((currentPage-1)*pageSize,currentPage*pageSize)


    
    return (
        <div>
            <div className='w-full mt-5 px-3 py-3  mt flex flex-col md:flex-row gap-10'>
                <div className="left grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-4 w-full md:w-3/4 ">
                    {
                        blogs.map((data, index) => {
                            return (
                                // <BlogCard key={ele.id} data={ele} selectedCategory={selectedCategory} pageSize={pageSize} currentPage={currentPage} />
                                <Link to={`/blogs/${data.id} `}>
                                    <div className="card-container  p-6 mb-3 shadow-2xl" key={data.id} data-aos="flip-right" data-aos-duration="1000">
                                        <img src={data.image} alt="" className='w-full h-[200px] flex items-center mb-3' />
                                        <p className='font-semibold mb-3 line-clamp-2 hover:text-blue-700'>{data.title}</p>
                                        <p className='inline-flex items-center gap-3 text-gray-600'><FaUserAlt /> {data.author} </p>
                                        <div>
                                        <p className='flex items-center gap-3 text-gray-600'> {data.published_date}</p>
                                        <p className='flex items-center gap-3 text-gray-600'>Category: {data.category}</p>
                                        </div>
                                        
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>

                {/* Releted blogs sidebar............... */}
                <div className="right w-full md:w-1/4">
                    <h1 className='font-semibold text-2xl mb-4'>Latest Blogs</h1>
                    {
                        blogs.slice(0, 5).map((ele) => {
                            return (
                                <RelatedBlogs key={ele.id} data={ele} />

                            )
                        })
                    }

                    <h1 className='font-semibold text-2xl mb-4'>Popular Blogs</h1>
                    {
                        blogs.slice(6, 11).map((ele) => {
                            return (
                                <RelatedBlogs key={ele.id} data={ele} />

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default BlogCard
