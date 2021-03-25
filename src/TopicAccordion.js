import React, { useState } from 'react';
import { TopicAccordionItem } from './TopicAccordionItem';
import { topics } from './data/topics';
import Accordion from 'react-bootstrap/Accordion';



export function TopicAccordion() {
    console.log(topics);


    return (
        <Accordion>
            {topics.map(topic => {
                return <TopicAccordionItem topic={topic} id={topic} key={topic}></TopicAccordionItem>
            })}
            
        </Accordion>




    )
}