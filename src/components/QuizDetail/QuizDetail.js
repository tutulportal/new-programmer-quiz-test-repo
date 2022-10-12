import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './QuizDetail.css';
import QuizList from '../QuizList/QuizList';

const QuizDetail = () => {
    const allQuizes = useLoaderData();
    return (
        <section className='quiz-wrapper'>
            {
                allQuizes.status ? <QuizList quiz={allQuizes.data}></QuizList> : <div className='cheat-warning'><h1><XCircleIcon className='warning-icon-size'/></h1><h2>No Data Found! You can't cheat!</h2></div>
            }
        </section>
    );
};

export default QuizDetail;