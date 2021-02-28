import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getPets } from '../../store/pets';
import './PetProfile.css';
import MessageFormModal from '../Messages/MessageFormModal'


const PetProfile = () => {
    const dispatch = useDispatch();
    const {petId} = useParams();

    const pet = useSelector(state => state.pets[petId]);
    const lgnUsr = useSelector(state => state.session.user)

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
                        </div>
                </div>
                <div className='profile'>
                    <div className='profile__info'>
                        <h2>{name}</h2>
                        <h3>{petType}</h3>
                        <h3>Age: {age}</h3>
                        <h3>{pet.owner.city}, {pet.owner.stateAbbr}</h3>
                        <h3>
                            <NavLink to={`/user/${pet.userId}`}>Owner: {pet.owner.username}</NavLink> </h3>
                        <h4 className='profile__description'>{description}</h4>
                    </div>
                    <div className='personality__scales'>
                        <h3 className='profile__sliders'>Energy Level: {energy} / 5</h3>
                        <h3 className='profile__sliders'>Social Level: {social} / 5</h3>
                        <h3 className='profile__sliders'>Behavior Level: {behaved} / 5</h3>
                        <h3 className='profile__sliders'>Size: {size === 1 ? "Small" : size === 2 ? "Medium" : size === 3 ? "Large": null} </h3>
                        <h3 className='profile__sliders'>Environment: {env === 1 ? "Outdoor" : env === 2 ? "Indoor/Outdoor" : env === 3 ? "Indoor": null}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetProfile;