//Pre Defined Components
import React from 'react';
import { useParams } from 'react-router-dom';

//User Defined Components
import { mainConcepts } from './data/mainConcepts';

export function MainConcept () {
    let { id } = useParams();
    let concepts= mainConcepts[id];

    return (
        <div id="root" class="overview-container">
            <h1>{id}</h1>
            <br/>
            <div className='concept-container'>
                {concepts.map(line => {
                    return (<p>{line}</p>)
                })}
            </div>

        </div>

    )
}