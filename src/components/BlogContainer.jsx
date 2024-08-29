import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import { FaClock, FaUser, FaUserAlt } from "react-icons/fa"


const BlogContainer = () => {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    // const [activaCategory, setActiveCategory] = useState(null)
    const [catgoriesmenu,setcatgorimenu] = useState([])

    useEffect(() => {
        const FetchBlogs = async () => {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
            if (selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const res = await fetch(url)
            const data = await res.json()
            setBlogs(data)
        
            // Extract categories from the fetched blogs
            const categories = [...new Set(data.map(blog => blog.category))];
            setcatgorimenu(categories);
          
        }
        FetchBlogs()
       
    }, [pageSize, currentPage, selectedCategory])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setCurrentPage(1)
        
    }

  
        

      
    
    return (
        <>
            <div className="container-section max-w-7xl mx-auto my-5 overflow-x-hidden">

                {/* catecory menu ... */}
                <div className=' grid grid-cols-3 md:grid-cols-6  md:w-3/4  gap-2 md:mx-auto'>

                <button onClick={()=>handleCategoryChange(null)} className={`px-8 py-2 font-semibold text-white rounded-sm`} style={{backgroundColor:"red"}}><Link>All</Link></button>
                {
                    catgoriesmenu.map((ele)=>{
                        return(
                            <button key={ele.id} data-aos="flip-right" data-aos-duration="1000" onClick={()=>handleCategoryChange(ele)} className={`px-8 py-2 font-semibold text-white rounded-sm`} style={{backgroundColor:selectedCategory===ele  ? "red":"orange"}}><Link>{ele}</Link></button>
                        )
                    })
                }
                   
                </div>

                {/* All blogs.... */}

                <BlogCard   data={blogs} selectedCategory={selectedCategory} pageSize={pageSize} currentPage={currentPage}/>

                {/* pagination section .... */}
                <div className='w-full mt-9 flex justify-center'>
                    
                    <Pagination  data={blogs} selectedCategory={selectedCategory} pageSize={pageSize} currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
        </>
    )
}

export default BlogContainer
