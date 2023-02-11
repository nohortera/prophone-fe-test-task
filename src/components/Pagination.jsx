import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({ onPageChange, totalPageCount, currentPage }) => {

    const handlePageChange = (event) => {
        onPageChange(event.selected + 1)
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageChange}
            pageRangeDisplayed={4}
            pageCount={totalPageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
            containerClassName='flex space-x-0.5 justify-center m-14 text-white items-center'
            nextLinkClassName='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'
            previousLinkClassName='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'
            pageLinkClassName='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'
            activeLinkClassName='font-bold bg-blue-700'
            breakClassName='text-black p-2'
        />
    );
};

export default Pagination;
