import React from 'react';
import './HomePage.css';
import TopHero from './../TopHero/TopHero';
import AllQuizes from '../AllQuizes/AllQuizes';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const quizes = useLoaderData();
    return (
        <section className='home-content-wrapper'>
            <div className='inner-home-content'>
                <TopHero></TopHero>
                <AllQuizes
                quizes={quizes.data}
                ></AllQuizes>
            </div>
        </section>
    );
};

export default HomePage;