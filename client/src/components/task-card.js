import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'
import { deleteTodo } from '../utils/API';

export default function taskCard({user}) {
// console.log(user)
const deleteTask = async ()
return(
        <div className="container col-6">
            
                {user
                    ? user.map(tasks => (<Card key={tasks._id} className='mt-2'>{tasks.todo} <button>delete</button></Card>))
                    : <Card>No Tasks Saved Yet...</Card>
                    }

        </div>
    )
}



