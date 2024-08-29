import React from 'react'
import { Link } from 'react-router-dom'


const Pagination = ({data,handlePageChange,pageSize,currentPage}) => {
    const totalPages = Math.ceil(data.length /pageSize)
    // console.log(totalPages)
    const renderPaginationLinks = ()=>{
        return Array.from({length:totalPages},(_ , i)=> i+1).map((pageNumber)=>(
            <li className={`${pageNumber === currentPage ? "Activepage" : ""} px-4`} key={pageNumber}>
                <Link href="#" onClick={()=>handlePageChange(pageNumber)}>{pageNumber}</Link>
            </li>
        ))
    }
    return (
        <div>
            <ul className='flex items-center space-x-3'>
                <button className={` px-4 py-3`} onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage==1} >Previous</button>
                <div className='flex space-x-8'>{renderPaginationLinks()}</div>
                <button className={` px-4 py-3`}  onClick={()=> handlePageChange(currentPage+1)} disabled={currentPage==totalPages}>Next</button>
            </ul>
        </div>
    )
}

export default Pagination
