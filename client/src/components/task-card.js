import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'





export default function taskCard(props) {



console.log(props.user[0].todo)
    
{props.user.map((tasks) => console.log(tasks.todo))}
return(
        <div className="container col-6">
        <Card>
            <Card.Body>
                {/* <p>{props.todo}</p> */}
                <ArrowRight />
            </Card.Body>
        </Card>

        </div>
    )
}



