// Pre-defined components
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Button from 'react-bootstrap/Button';

// User-defined components
import { tfQuestions } from './data/tf';
import './styles/multiChoice.css';


export function TrueFalse () {
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    let { id } = useParams();
    console.log(tfQuestions);
    let topicQuestions = tfQuestions[id];
    let currentQuestion = topicQuestions[currQuestionIndex];
    console.log(topicQuestions);

    const handleClick = (e) => {
        e.preventDefault();
        let response = e.target.value;
        console.log(response);
        console.log(e.target);
        // check if response is correct
        if(response === currentQuestion.answer)
        {
            console.log("correct");
            // change color to green
            e.target.classList.toggle('btn-light');
            e.target.classList.toggle('btn-success');
        }
        else
        {
            console.log("incorrect");
            e.target.classList.toggle('btn-light');
            e.target.classList.toggle('btn-danger');
        }

        //prevent other options from being clicked
        let buttons = document.querySelectorAll('.tfOption');
        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].disabled = true;
        }

    }

    const nextQuestion = (e) => {
        // go to next question
        setCurrQuestionIndex((prev) => prev < topicQuestions.length  - 1 ? prev + 1 : 0);
        // reset styling
        let buttons = document.querySelectorAll('Button');
        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].classList.remove('btn-success');
            buttons[i].classList.remove('btn-danger');
            buttons[i].classList.add('btn-light');
            buttons[i].disabled = false;
        }

    }

    return (
        <div className="form-container">
                <div className="response-container">
                    <h6>{currentQuestion.question}</h6>
                    <Button variant="light" className="tfOption" value="true" onClick={handleClick}>True</Button>
                    <Button variant="light" className="tfOption" value="false" onClick={handleClick}>False</Button>
                    
                </div>
                <Button variant="dark" className="nextQuestion" onClick={nextQuestion}>Next Question</Button>
        </div>
    )
}