import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen} from 'react-bootstrap-icons'

// TODO: Get all the data in the db for the logged in user's todo-lists




export default function taskCard(props) {
//  const {userTasks} = await getUser({
    
//  })



    return(
        <div className="container col-6">
            <Card class='text-bg-warning'>
                <div className='container d-flex align-items-center'>
                    <Card.Body>
                        {props.todo}
                    </Card.Body>
                    <Button className='task-btn'><Pen /></Button>
                    <Button className='task-btn ml-2'><Trash /></Button>
                </div>
            </Card>
        </div>
    )
}



