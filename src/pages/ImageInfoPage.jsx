import React, {useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import {fetchOneImage} from "../api/imagesService";
import InfoRow from "../components/InfoRow";

const ImageInfoPage = () => {
    const {id} = useParams()
    const [image, isLoading, isError] = useFetch(useMemo(() => fetchOneImage.bind(this, id), [id]))

    const imageInfo = useMemo(() => {
        if (!image) return
        return [
            {
                label: 'Type',
                description: image.type
            },
            {
                label: 'Tags',
                description: image.tags
            },
            {
                label: 'Views',
                description: image.views
            },
            {
                label: 'Downloads',
                description: image.downloads
            },
            {
                label: 'Likes',
                description: image.likes
            },
            {
                label: 'Comments',
                description: image.comments
            }
        ]
    }, [image])

    if (isError) {
        return <h1 className='text-red-800 text-center'>Something went wrong...</h1>
    }

    if (isLoading) {
        return <h2 className='text-center'>Loading...</h2>
    }

    return (
        <>
            {image && (
                <div className='container bg-white drop-shadow-md flex gap-x-12 rounded-md p-12 mx-auto my-10'>
                    <img className='w-3/5 rounded-md' src={image.largeImageURL} alt={image.tags} />
                    <div className='w-full flex flex-col justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img className='h-14 w-14 rounded-full' src={image.userImageURL} alt={`User: ${image.user}`} />
                            <div>
                                <p className='font-mono'>{image.user}</p>
                                <p className='font-light text-gray-400'>Online: 1h</p>
                            </div>
                        </div>

                        <table className='my-12 w-full'>
                            <tbody>
                                {imageInfo && imageInfo.map(info => (
                                    <InfoRow
                                        key={info.label}
                                        label={info.label}
                                        description={info.description}
                                    />
                                ))}
                            </tbody>
                        </table>

                        <Link className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/'>Back</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageInfoPage;
