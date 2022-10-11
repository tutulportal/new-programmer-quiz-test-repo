import React from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import './Header.css';

const Header = () => {
    return (
        <div className='menu-top'>
            <div className="logoSide">
                <RocketLaunchIcon className="icon-size"/> <h2>Muslim Programmers Quiz</h2>
            </div>
            <div className="menuSide">
                <nav>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </nav>
            </div>
        </div>
    );
};

export default Header;