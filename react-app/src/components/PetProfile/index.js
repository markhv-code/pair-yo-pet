import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPets, deletePet } from '../../store/pets';
import './PetProfile.css';

import MessageFormModal from '../Messages/MessageFormModal'
import PetProfileForm from '../PetProfileForm'

const PetProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {petId} = useParams();

    const pet = useSelector(state => state.pets[petId]);
    const lgnUsr = useSelector(state => state.session.user)

    const handleDelete = function (e) {
        const res = window.confirm(`Are you sure you want to remove ${pet.name}?`)
        if (res) {
            dispatch(deletePet(pet.id))
            history.push(`/`)
            // history.push(`/users/${pet.owner.id}`)
        }
    }

    useEffect(() => {
        dispatch(getPets(petId))
    }, [dispatch, petId])

    if (!pet) return null;
    const {
        name, petType, age, imageURL, energy, social, behaved, size, env, description} = pet;
        
    return (
        <>
            <div className='profile__container'>
                <div className='left__container'>
                    <img src={imageURL} alt="Pet Profile"/>
                        <div className='profile__message-owner'>
                            {lgnUsr.id !== pet.owner.id && 
                            <div>
                                <div className='text'>Want To Set Up A Play Date With Me?</div>
                                <MessageFormModal receiver={pet.owner}/>
                            </div>}
                            {lgnUsr.id === pet.owner.id && 
                                <div>
                                    <PetProfileForm petToUpdate={pet}/>
                                    <button 
                                        className="profile-button delete-pet" 
                                        onClick={handleDelete}>Remove Pet
                                    </button>
                                </div>
                            }
                        </div>
                </div>
                <div className='profile'>
                    <div className='profile__info'>
                        <h2>{name}</h2>
                        <h3>{petType}</h3>
                        <h3>Age: {age}</h3>
                        <h3>{pet.owner.city}, {pet.owner.stateAbbr}</h3>
                        <h4 className='profile__description'>{description}</h4>
                    </div>
                    <div className='personality__scales'>
                        <h3 className='profile__sliders'>Energy Level: {energy} / 5</h3>
                        <h3 className='profile__sliders'>Social Level: {social} / 5</h3>
                        <h3 className='profile__sliders'>Behavior Level: {behaved} / 5</h3>
                        <h3 className='profile__sliders'>Size: {size === 1 ? "Small" : size === 2 ? "Medium" : size === 3 ? "Large": null} </h3>
                        <h3 className='profile__sliders'>Environment: {env === 1 ? "Indoor" : env === 2 ? "Indoor/Outdoor" : env === 3 ? "Outdoor": null}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetProfile;