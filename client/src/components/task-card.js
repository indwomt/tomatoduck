import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'





export default function taskCard(props) {




    return(
        <div className="container col-6">

        
        <Card>
            <Card.Body>I am a task to do!!!
                <ArrowRight />
            </Card.Body>
        </Card>

        </div>
    )
}



