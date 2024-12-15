import React from 'react';

const SectionHeader = ({title}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold uppercase'>{title}</h1>
        </div>
    );
};

export default SectionHeader;