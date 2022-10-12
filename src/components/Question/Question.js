import React from 'react';
import { Markup } from 'interweave';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = (props) => {
    const {id, question, options, correctAnswer} = props.question;
    const checkOption = props.checkOption;
    const correctAns = props.correctAns;
    return (
        <div className="theQuiz">
            <h2>Question: <Markup content={question} /></h2>
            <EyeIcon className='eye-icon' onClick={() => correctAns(correctAnswer)}/>
            <div className="quiz-options">
                {
                    options.map(option => <li key={option}><input type="radio" name={id} id={option} onClick={() => checkOption([option, correctAnswer])} /> <label htmlFor={option}>{option}</label></li>)
                }
            </div>
        </div>
    );
};

export default Question;