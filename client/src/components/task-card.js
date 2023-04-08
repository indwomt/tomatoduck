import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen} from 'react-bootstrap-icons'


export default function taskCard(props) {

    return(
        <div className="container col-6">
            <Card>
                <div className='container d-flex align-items-center'>
                    <Card.Body>
                        I am a task to do!!!
                    </Card.Body>
                    <Button className='task-btn'><Pen /></Button>
                    <Button className='task-btn ml-2'><Trash /></Button>
                </div>
            </Card>
        </div>
    )
}



