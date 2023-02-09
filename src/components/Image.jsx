import React from 'react';

const Image = ({image}) => {
    return (
        <img
            className='rounded-md block object-cover w-full h-full h-max-[300px]'
            src={image.webformatURL}
            alt={image.tags}
        />
    );
};

export default Image;
