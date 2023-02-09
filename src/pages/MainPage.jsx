import React from 'react';
import SearchBar from "../components/SearchBar";
import Image from "../components/Image";
import {fetchImages} from "../api/imagesService";
import {useFetch} from "../hooks/useFetch";

const MainPage = () => {
    const [images, isLoading, isError, loadNewImages] = useFetch(fetchImages)

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
                {images && images.length > 0 && images.map(image => {
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
