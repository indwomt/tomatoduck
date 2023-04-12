import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'

export default function taskCard({user}) {
// console.log(user)
return(
        <div className="container col-6">
            
                {user
                    ? user.map(tasks => (<Card key={tasks._id} className='mt-2'>{tasks.todo}</Card>))
                    : <Card>No Tasks Saved Yet...</Card>
                    }

        </div>
    )
}



