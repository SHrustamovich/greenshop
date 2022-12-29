import React, { useEffect, useState } from 'react'
import { UsePaginationRange,DOTS } from './UsePaginationRange'

const Pagination = () => {
    const [totalPageCount] = useState(Math.ceil(data.length / currentPerPage))
    const [currentPage,setCurrentPage] = useState(1)
    const paginationRange = UsePaginationRange({
        totalPageCount,
        currentPerPage,
        buttonConst,
        siblingCount,
        currentPage
    })
    useEffect(() => {
        window.scrollTo({
            behavior:"smooth",
            top:"0",
        })
    },[currentPage])
    const goToNextPage = () => {
        setCurrentPage((page) => page + 1)
    }
    const gotToPreviousPage = () => {
        setCurrentPage((page) => page - 1)
    }
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * currentPerPage - currentPerPage;
        const endIndex = startIndex + currentPerPage;
        return data.slice(startIndex, endIndex);
      };
      
}