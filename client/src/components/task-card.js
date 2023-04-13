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
    <div className="container col-10">
    {user
      ? user.map(tasks => (
        <Card key={tasks._id} className='task-box col-12 mt-2'>
          <div className="d-flex justify-content-between">
            <div className="col my-3 px-3 align-items-center">
              <p className='align-items-center task-text'>{tasks.todo}</p>
            </div>
            <div className="col-auto p-2 align-items-center">
            <Button className='delete-btn' onClick={() => deleteTask(tasks._id)}>
  <Trash />
</Button>
            </div>
          </div>
        </Card>
      ))
      : <Card>No Tasks Saved Yet...</Card>
    }
  </div>
  
    )
}



