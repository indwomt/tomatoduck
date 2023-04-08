import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import TaskCard from './task-card'


export default function Tasks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container col-6 d-flex-col justify-content-center my-5'>
      <div className='task-header col-12 justify-content-between d-flex flex-wrap'>
        {/* add something like todo[i].length to get the tasks needed */}
        <h2 className='col-md-4 flex-wrap'>Tasks Left: 0</h2>
        <button className='add-task-btn col-md-4 flex-wrap' onClick={handleShow}>
          Add Task
        </button>
      </div>
      <div className='task-container'>
        <TaskCard />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Your To-do Task' />
          </Form.Group>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
