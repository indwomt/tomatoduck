import React, { useState } from 'react';
import icon from '../assets/tomato-24.svg';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input,InputGroup, InputGroupText } from 'reactstrap';

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <a className='navbar-brand' href='#'>
          <img src={icon} alt='Tomato icon' />
          TomatoDuck
        </a>
        <button className='login-btn' onClick={toggleModal}>
          Sign In
        </button>
      </nav>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sign In</ModalHeader>
        <ModalBody>
        <div>
  <InputGroup>
    
    <Input placeholder="username" />
  </InputGroup>
  <br />
  <InputGroup>
    
    <Input placeholder="password" />
  </InputGroup>
  <br />
  
  <br />
  
</div>
        </ModalBody>
        <ModalFooter>
          <button color='secondary' onClick={toggleModal}>
            Close
          </button>
          <button color='primary' onClick={toggleModal}>
            Sign In
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Header;

  