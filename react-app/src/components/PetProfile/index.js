import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPets } from '../../store/pets';
import './PetProfile.css';


const PetProfile = () => {
    const dispatch = useDispatch();
    const {petId} = useParams();

    const pet = useSelector(state => state.pets[petId]);

    useEffect(() => {
        dispatch(getPets(petId))
    }, [dispatch, petId])

    if (!pet) return null;
    const {
        name, petType, age, imgURL, city, stateAbbr, energy, social, behaved, size, env, description} = pet;

    return (
        <>
            <div className='profile__container'>
                <img src={imgURL} alt="Pet Profile"/>
                <div className='profile__info'>
                    <h2>{name}</h2>
                    <h3>{petType}</h3>
                    <h3>{age}</h3>
                    <h3>{city}, {stateAbbr}</h3>
                    <h4 className='profile__description'>{description}</h4>
                </div>
                <div className='personality__scales'>
                    <h3 className='profile__sliders'>{energy}</h3>
                    <h3 className='profile__sliders'>{social}</h3>
                    <h3 className='profile__sliders'>{behaved}</h3>
                    <h3 className='profile__sliders'>{size}</h3>
                    <h3 className='profile__sliders'>{env}</h3>
                </div>
                    <div className='profile__message-owner'>
                        <p>Want To Set Up A Play Date With Me?</p>
                            <button>Message My Owner!
                                <i className="fas fa-paw"></i>
                            </button>
                    </div>
            </div>
        </>
    )
}

export default PetProfile;