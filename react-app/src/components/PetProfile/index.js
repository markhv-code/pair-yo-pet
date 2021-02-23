import React, { useState } from 'react';
import { Modal } from '../../context/ModalAndAuth'
import PetProfileForm from './petProfileForm';

export default function PetProfileModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Create Your Pets Profile</button>
            {showModal && (
                <Modal>
                    <PetProfileForm />
                </Modal>
            )}
        </>
    )
}