import React from 'react';
import { activities } from './data/activities';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



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
                                <Link to={"/" + activity.url + "/" + topic}>
                                    <div className="activity-link">
                                        {activity.Title}
                                    </div>
                                </Link>
                            )
                        })}

                    </Card.Body>
                </Accordion.Collapse>
        </Card>
    )

    
}