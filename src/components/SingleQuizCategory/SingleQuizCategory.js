import React from 'react';
import { Link } from 'react-router-dom';
import './SingleQuizCategory.css';

const SingleQuizCategory = ({quiz}) => {
    const {id, logo, name, total} = quiz;
    return (
        <div className="quiz-category">
            <div className="left-side-quiz-single">
                <img src={logo} alt="" />
            </div>
            <div className="right-side-quiz-single">
                <h2>Course Name: {name}</h2>
                <p>Total Quiz: {total}</p>
                <Link to={`/quiz/${id}`}>Start Quiz</Link>
            </div>
        </div>
    );
};

export default SingleQuizCategory;