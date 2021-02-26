import React, { useState } from 'react';
import { Modal } from '../../../context/ModalAndAuth';
import MessageFormForModal from './MessageFormForModal';

export default function MessageFormModal({receiver}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='message' onClick={() => setShowModal(true)}>
        Message My Owner!
        <i className="fas fa-paw"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MessageFormForModal receiver={receiver} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}
