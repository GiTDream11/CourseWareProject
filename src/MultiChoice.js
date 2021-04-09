// Pre-defined components
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Button from 'react-bootstrap/Button';

// User-defined components
import { mcQuestions } from './data/mcq';
import './styles/multiChoice.css';


export function MultiChoice () {
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    let { id } = useParams();
    let topicQuestions = mcQuestions[id];
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
        let buttons = document.querySelectorAll('.mcqOption');
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
                    <h2>{currentQuestion.question}</h2>
                    <Button variant="light" className="mcqOption" value="a" onClick={handleClick}>{currentQuestion.a}</Button>
                    <Button variant="light" className="mcqOption" value="b" onClick={handleClick}>{currentQuestion.b}</Button>
                    <Button variant="light" className="mcqOption" value="c" onClick={handleClick}>{currentQuestion.c}</Button>
                    <Button variant="light" className="mcqOption" value="d" onClick={handleClick}>{currentQuestion.d}</Button>
                </div>
                <Button variant="dark" className="nextQuestion" onClick={nextQuestion}>Next Question</Button>
        </div>
    )
}