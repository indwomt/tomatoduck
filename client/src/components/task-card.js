import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'





export default function taskCard({user}) {




    

return(
        <div className="container col-6">
        <Card>
            <Card.Body>
                {user.map((tasks) => 
                     (
                    <p>{tasks.todo}</p>
                    )
                )}
                
            </Card.Body>
        </Card>

        </div>
    )
}



