import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPets } from '../../store/pets';
import './PetProfile.css';
import MessageFormModal from '../Messages/MessageFormModal'


const PetProfile = () => {
    const dispatch = useDispatch();
    const {petId} = useParams();

    const pet = useSelector(state => state.pets[petId]);

    useEffect(() => {
        dispatch(getPets(petId))
    }, [dispatch, petId])

    
    console.log(pet.owner.id, "pet.owner");

    if (!pet) return null;
    const {
        name, petType, age, imageURL, energy, social, behaved, size, env, description} = pet;
    return (
        <>
            <div className='profile__container'>
                <img src={imageURL} alt="Pet Profile"/>
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
                        <h3 className='profile__sliders'>Size: {size}</h3>
                        <h3 className='profile__sliders'>Environment: {env}</h3>
                    </div>
                    <div className='profile__message-owner'>
                        <div>Want To Set Up A Play Date With Me?
                            <button className='message' >Message My Owner!
                                <i className="fas fa-paw"></i>
                            </button>
                            <MessageFormModal receiverId={pet.owner.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetProfile;