import React from 'react';
import './HomePage.css';
import TopHero from './../TopHero/TopHero';

const HomePage = () => {
    return (
        <section className='home-content-wrapper'>
            <div className='inner-home-content'>
                <TopHero></TopHero>
            </div>
        </section>
    );
};

export default HomePage;