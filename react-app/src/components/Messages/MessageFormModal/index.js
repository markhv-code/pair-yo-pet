import React, { useState } from 'react';
import { Modal } from '../../../context/ModalAndAuth';
import MessageFormForModal from './MessageFormForModal';

export default function MessageFormModal({receiverId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='profile-button' onClick={() => setShowModal(true)}>
        <i className='fas fa-paw'> Message my owner!</i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MessageFormForModal
            receiverId={receiverId}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}
