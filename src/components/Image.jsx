import React from 'react';
import {Link} from "react-router-dom";

const Image = ({image}) => {
    return (
        <Link to={`/images/${image.id}`}>
            <img
                className='rounded-md block object-cover w-full h-full h-max-[300px]'
                src={image.webformatURL}
                alt={image.tags}
            />
        </Link>
    );
};

export default Image;
