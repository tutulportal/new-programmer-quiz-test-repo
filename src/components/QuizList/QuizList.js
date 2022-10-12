import React from 'react';
import Question from '../Question/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizList = ({quiz}) => {
    const {name, total, questions} = quiz;
    const correctAns = (data) => {
        if(data){
            toast.info(`The Correct Answer is: ${data}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    const checkOption = (data) => {
        if(data[0] === data[1]){
            toast.success('Awesome! The answer is Correct!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }else{
            toast.error('Incorrect Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div className="inner-quiz-wrapper">
            <div className="quiz-header">
                <h1>Quiz Name: {name}</h1>
                <p>Total Quiz: {total}</p>
            </div>
            <div className='quizes'>
                {
                    questions.map(question => <Question key={question.id} question={question} checkOption={checkOption} correctAns={correctAns}></Question>)
                }
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            </div>
        </div>
    );
};

export default QuizList;