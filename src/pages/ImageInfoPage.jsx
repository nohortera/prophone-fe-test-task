import React from 'react';
import {useParams} from "react-router-dom";

const ImageInfoPage = () => {
    const {id} =useParams()

    return (
        <h2>Image Info Page {id}</h2>
    );
};

export default ImageInfoPage;
