import React, { useState } from 'react';
import { Modal } from '../../../context/ModalAndAuth';
import MessageFormForModal from './MessageFormForModal';

export default function MessageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Message My Owner</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MessageFormForModal />
        </Modal>
      )}
    </>
  );
}
