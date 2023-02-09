import React from 'react';

const InfoRow = ({label, description}) => {
    return (
        <tr className='border-b border-gray-200 h-12'>
            <td className='text-lg font-bold w-1/3'>{label}:</td>
            <td>{description}</td>
        </tr>
    );
};

export default InfoRow;
