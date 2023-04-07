import React, { useState } from 'react';
import icon from '../assets/tomato-24.svg';
// import { Nav, Container} from 'reactstrap';
import { Modal, Tab, Nav,} from 'react-bootstrap'
import SignUpForm from './signup';
import LoginForm from './login';
// import Auth from '../utils/auth'

const Header = () => {
  const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  return (
    <div className='container'>
      <nav className='navbar'>
        <a className='navbar-brand' href='#'>
          <img src={icon} alt='Tomato icon' />
          TomatoDuck
        </a>
        <button className='login-btn' onClick={()=>setModal(true)}>
          Sign In/Sign Up
        </button>
      </nav>


     <Modal
      show={modal}
      onHide={()=> setModal(false)}
      aria-labelledby='signup-modal'>
        <Tab.Container defaultActiveKey ='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={()=> setModal(false)}/>
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={()=> setModal(false)}/>
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>

      </Modal>
    </div>
  );
};

export default Header;

  