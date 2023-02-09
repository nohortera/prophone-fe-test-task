import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Image from "../components/Image";

const MainPage = () => {
    const [images, setImages] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] =useState(false)

    const fetchAllImages = async (query = '') => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://pixabay.com/api/?key=33514977-fa7a809f1a8cdbe625a3d5ea7&per_page=30&q=${query}`)
            setImages(response.data.hits)
            setIsLoading(false)
        } catch (e) {
            setIsError(true)
            setIsLoading(false)
        }
    }

    const loadNewImages = (query) => {
        fetchAllImages(query)
    }

    useEffect(() => {
        fetchAllImages()
    }, [])



    if (isError) {
        return <h1 className='text-red-800 text-center'>Something went wrong...</h1>
    }

    if (isLoading) {
        return <h2 className='text-center'>Loading...</h2>
    }

    return (
        <>
            <div className='flex items-center justify-center h-[200px]'>
                <SearchBar onSubmit={loadNewImages} />
            </div>
            <ul className='grid grid-cols-3 gap-4 justify-center mx-8 mb-12'>
                {images.length > 0 && images.map(image => {
                    return (
                        <li className='h-[300px]' key={image.id}>
                            <Image image={image} />
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default MainPage;
