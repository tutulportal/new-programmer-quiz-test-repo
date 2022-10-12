import React from 'react';
import Question from '../Question/Question';

const QuizList = ({quiz}) => {
    const {name, total, questions} = quiz;
    console.log(quiz)
    return (
        <div className="inner-quiz-wrapper">
            <div className="quiz-header">
                <h1>Quiz Name: {name}</h1>
                <p>Total Quiz: {total}</p>
            </div>
            <div className='quizes'>
                {
                    questions.map(question => <Question key={question.id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizList;