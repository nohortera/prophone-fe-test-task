import React, {useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import {fetchOneImage} from "../api/imagesService";

const ImageInfoPage = () => {
    const {id} =useParams()
    const [image, isLoading, isError] = useFetch(useMemo(() => fetchOneImage.bind(this, id), [id]))

    if (isError) {
        return <h1 className='text-red-800 text-center'>Something went wrong...</h1>
    }

    if (isLoading) {
        return <h2 className='text-center'>Loading...</h2>
    }

    return (
        <>
            <Link className='inline-block text-xl mt-10 ml-20 text-blue-500 hover:underline hover:text-violet-600' to='/'>{'<- Back'}</Link>
            {image && (
                <div className='container bg-white drop-shadow-md flex gap-x-12 rounded-md p-12 mx-auto my-10'>
                    <img className='w-3/5 rounded-md' src={image.largeImageURL} alt={image.tags} />
                    <div className='w-full'>
                        <div className='flex gap-2 items-center'>
                            <img className='h-14 w-14 rounded-full' src={image.userImageURL} alt={`User: ${image.user}`} />
                            <div>
                                <p className='font-mono'>{image.user}</p>
                                <p className='font-light text-gray-400'>Online: 1h</p>
                            </div>
                        </div>

                        <table className='my-12 w-full'>
                            <tbody>
                                <tr className='border-b border-gray-200'>
                                    <td className='text-lg font-bold w-1/3'>Tags:</td>
                                    <td>{image.tags}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageInfoPage;
