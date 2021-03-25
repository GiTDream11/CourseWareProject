import React from 'react';
import { TopicAccordion } from './TopicAccordion';

export function Home () {


    return (
        <div className="App">
            {/* left column div */}
            {/* center column div */}
            <div className="center-container container">
                <h1>Hello World</h1>
                <TopicAccordion />
            </div>
            {/* right column div */}
        </div>
    );
}