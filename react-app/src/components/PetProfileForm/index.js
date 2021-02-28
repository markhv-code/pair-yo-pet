import React, { useState } from 'react';
import { Modal } from '../../context/ModalAndAuth';
import PetProfileForm from './petProfileForm';

export default function PetProfileModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav__item" onClick={() => setShowModal(true)}>Add Pet</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PetProfileForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
