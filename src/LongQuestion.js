import React from 'react';
import { longQuestions } from './data/longQuestion';
import './styles/styles.css';


export function LongQuestion(props) {

    return(
        <div>
            {longQuestions.map(topic => {
                
                return (
                    <>
                        <h2 className="lq-title">{topic.Title}</h2>
                        <br/>
                        <div className="lq-container">
                            {topic.Questions.map(q => {
                        
                                return <p>{q}</p>

                            })}
                        </div>
                        <br/>
                    </>
                )
            })}
        </div>
    )



}