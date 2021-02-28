import React, { useState } from 'react';
import { Modal } from '../../../context/ModalAndAuth';
import LoginForm from './LoginForm';

export default function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='nav__item' onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}