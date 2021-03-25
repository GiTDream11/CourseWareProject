import React from 'react';
import { activities } from './data/activities';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



export function TopicAccordionItem(props) {

    const { topic, id } = props;

    return (

        <Card>
            
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={id}>
                    {topic}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                    <Card.Body>
                        {activities.map(activity => {
                            return (
                                <a>
                                    <div className="activity-link">
                                        {activity}
                                    </div>
                                </a>
                            )
                        })}

                    </Card.Body>
                </Accordion.Collapse>
        </Card>

        // <div className="accordion-item">
        //     <h1 className="accordion-header">
        //         <button 
        //         className="accordion-button" 
        //         type="button" data-bs-toggle="collapse"
        //         data-bs-target={"#" + id}>
        //                 {topic}
        //         </button>
        //     </h1>
        //     <div id={id}
        //     className="accordion-collapse collapse">
        //         <div className="accordion-body">
        //             {activities.map(activity => {
        //                 return (
        //                     <a>
        //                         <div className="activity-link">
        //                             {activity}
        //                         </div>
        //                     </a>
        //                 )
        //             })}
        //         </div>
        //     </div>
        // </div>
    )

    
}