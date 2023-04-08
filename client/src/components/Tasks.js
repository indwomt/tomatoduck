import react,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Tasks() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div className='container col-8 d-flex-col justify-content-center my-5'>
            <div className='task-header col-12 justify-content-between d-flex flex-wrap'>
                {/* add something like todo[i].length to get the tasks needed */}
                <h2 class='col-md-4 flex-wrap'>Tasks Left: 0</h2>
                <button className='add-task-btn col-md-4 flex-wrap' onClick={handleShow}>Add Task</button>
            </div>
            <div className='task-container'>

            </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        
    )

}