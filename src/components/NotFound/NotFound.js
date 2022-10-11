import React from 'react';
import { MagnifyingGlassMinusIcon } from '@heroicons/react/24/solid';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1><MagnifyingGlassMinusIcon/></h1>
            <h1>ROUTE NOT FOUND</h1>
        </div>
    );
};

export default NotFound;