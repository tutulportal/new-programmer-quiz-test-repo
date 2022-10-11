import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import './Header.css';

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    let menuActive;
    if(menuIcon === true){
        menuActive = 'active-menu';
    }else{
        menuActive = '';
    }
    return (
        <div className='menu-top'>
            <div className="logoSide">
                <RocketLaunchIcon className="icon-size"/> <h2 className='desktop-logo'>Muslim Programmers Quiz</h2> <h2 className='mobile-logo'>M.P.QUIZ</h2>
            </div>
            <div className="menuSide">
                <nav className={menuActive}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </nav>
            </div>
            <Bars3BottomRightIcon className='menu-icon' onClick={() => setMenuIcon(!menuIcon)}/>
        </div>
    );
};

export default Header;