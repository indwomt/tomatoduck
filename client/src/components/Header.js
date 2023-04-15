import React, { useState } from 'react';
import icon from '../assets/tomato-24.svg';
import { Link } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap';
import SignUpForm from './Signup';
import LoginForm from './Login';
import Auth from '../utils/auth';


const Header = () => {
  const [modal, setModal] = useState(false);



  return (
    <>
      <div className='container d-flex-col flex-wrap'>
        <nav className='navbar d-flex justify-content-between align-items-center flex-wrap'>
          <div className='d-flex align-items-center'>
            <Link className='link-unstyled d-flex' to='/'>
              <img src={icon} alt='Tomato icon' />
              <h2 className='d-flex align-self-center'>TomatoDuck</h2>
            </Link>
            
          </div>
          
          {Auth.loggedIn() ? (
            <div className='d-flex align-items-center justify-content-end'>
              <Link className='mx-2' to='/preferences'>
                <button className='login-btn'>User Settings</button>
              </Link>
              <button className='login-btn mx-2' onClick={Auth.logout}>
                Log Out
              </button>
              
            </div>
          ) : (
            <button className='login-btn' onClick={() => setModal(true)}>
              Sign In/Sign Up
            </button>
              
          )}
          
        </nav>
        
      </div>

      <Modal
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby='signup-modal'
      >
        <Tab.Container defaultActiveKey='login'>
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
                <LoginForm handleModalClose={() => setModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default Header;


  