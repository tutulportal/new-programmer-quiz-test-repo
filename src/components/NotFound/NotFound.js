import React from 'react';
import { MagnifyingGlassMinusIcon } from '@heroicons/react/24/solid';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2><MagnifyingGlassMinusIcon  className="not-found-icon"/></h2>
            <h1>ROUTE NOT FOUND</h1>
            <Link to='/home'>Go To Home</Link>
        </div>
    );
};

export default NotFound;