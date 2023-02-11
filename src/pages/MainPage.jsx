import React, {useCallback, useEffect} from 'react';
import SearchBar from "../components/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {getImagesAsync, setCurrentPage, setQuery} from "../store/slices/imagesSlice";
import Pagination from "../components/Pagination";
import Gallery from "../components/Gallery";

const MainPage = () => {
    const {images, currentPage, totalPageCount, query, isLoading, isError} = useSelector((state) => state.images)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getImagesAsync())
    }, [currentPage, query, dispatch])

    const loadNewImages = (query) => {
        dispatch(setQuery(query))
    }

    const handlePageChange = useCallback((page) => {
        dispatch(setCurrentPage(page))
    }, [dispatch])

    if (isError) {
        return <h1 className='text-red-800 text-center'>Something went wrong...</h1>
    }

    if (isLoading) {
        return <h2 className='text-center'>Loading...</h2>
    }

    return (
        <>
            <div className='flex items-center justify-center h-[200px]'>
                <SearchBar onSubmit={loadNewImages} initialQuery={query} />
            </div>
            <Gallery images={images} />
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPageCount={totalPageCount} />
        </>
    );
};

export default MainPage;
