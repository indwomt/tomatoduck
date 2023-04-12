import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Trash, Pen, ArrowRight} from 'react-bootstrap-icons'
import { deleteTodo } from '../utils/API';
import Auth from '../utils/auth'

export default function taskCard({user}) {
// console.log(user)
const deleteTask = async (id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null 
    if(!token){
        return false
    }
    try {
        const del = await deleteTodo(id, token)
    } catch (error) {
        console.log(error)
    }
}
return(
        <div className="container col-6">
            
                {user
                    ? user.map(tasks => (<Card key={tasks._id} className='mt-2'>{tasks.todo} <button onClick={() => deleteTask(tasks._id)}>delete</button></Card>))
                    : <Card>No Tasks Saved Yet...</Card>
                    }

        </div>
    )
}



