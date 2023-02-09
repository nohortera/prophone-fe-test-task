import React from 'react';
import {Link} from "react-router-dom";

const Image = ({image}) => {
    return (
        <Link to={`/images/${image.id}`} className='w-full h-full group' >
            <img
                className='rounded-md block object-cover w-full h-full h-max-[300px] group-hover:scale-95 transition-transform duration-300 ease-out group-hover:border-2 group-hover:border-blue-700'
                src={image.webformatURL}
                alt={image.tags}
            />
        </Link>
    );
};

export default Image;
