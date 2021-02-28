import React, { useState } from 'react';
import { Modal } from '../../context/ModalAndAuth';
import PetProfileForm from './petProfileForm';

export default function PetProfileModal({ petToUpdate }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={
          petToUpdate
            ? 'profile-button'
            : 'nav__item navbar-dropdown__nav__item'
        }
        onClick={() => setShowModal(true)}
      >
        {!!petToUpdate ? 'Update Pet' : 'Add Pet'}
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PetProfileForm
            petToUpdate={petToUpdate}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}
