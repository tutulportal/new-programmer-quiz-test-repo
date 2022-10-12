import React from 'react';
import { Markup } from 'interweave';

const Question = (props) => {
    console.log(props);
    const {id, question, options} = props.question;
    return (
        <div className="theQuiz">
            <h2>Question: <Markup content={question} /></h2>
            <div className="quiz-options">
                {
                    options.map(option => <li><input type="radio" name={id} id={option} /> <label htmlFor={option}>{option}</label></li>)
                }
            </div>
        </div>
    );
};

export default Question;