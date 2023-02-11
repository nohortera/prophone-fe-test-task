import React from 'react';
import Image from "./Image";

const Gallery = ({images}) => {
    return (
        <ul className='grid grid-cols-3 gap-4 justify-center mx-8 mb-12'>
            {images.map(image => {
                return (
                    <li className='h-[300px]' key={image.id}>
                        <Image image={image} />
                    </li>
                )
            })}
        </ul>
    );
};

export default Gallery;
