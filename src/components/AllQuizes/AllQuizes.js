import React from 'react';
import SingleQuizCategory from '../SingleQuizCategory/SingleQuizCategory';
import './AllQuizes.css';

const AllQuizes = ({quizes}) => {
    return (
        <div className='all-quizes'>
            {
                quizes.map(quiz => <SingleQuizCategory
                key={quiz.id}
                quiz={quiz}
                ></SingleQuizCategory>)
            }
        </div>
    );
};

export default AllQuizes;