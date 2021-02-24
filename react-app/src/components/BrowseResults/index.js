import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMultipleProfiles } from '../../store/pets';
import { useBrowseContext } from '../../context/BrowseContext';
import './BrowseResults.css'

const BrowseResults = () => {
    
    const pets = useSelector((state) => state.pets);
    const petResults = Object.values(pets).filter((pet) => {
        return (
            pet.name.toLowerCase().search() !== -1 ||
            pet.petType.toLowerCase().search() !== -1 ||
            pet.age.search() !== -1 ||
            pet.owner.city.toLowerCase().search() !== -1 ||
            pet.owner.stateAbbr.toLowerCase().search() !== -1 
            );
        })
        
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMultipleProfiles())
    }, [dispatch])

    const {setInput} = useBrowseContext();

    useEffect(() => {
        setInput('');
    }, [setInput]);

    return (
        <div className='browse__wrapper'>
            <div>
                <div clasName='results__container'>
                    <div className='browse__bar'>
                        <input placeholder='Filter by' type='text' />
                    </div>
                    <div className='tile__results'>
                        {petResults.map(pet => {
                            const { id, imgURL, name } = pet;
                            return (
                                <Link to={`/pets/${id}`}>
                                <div className='pet__card'>
                                    <img src={imgURL} alt=""/>
                                    <div className='pet__card-info'>
                                        <h2>{name}</h2>
                                    </div>
                                </div>
                            </Link>       
                        )})}
                    </div>
                </div>
            </div>

        </div>
    )
}


export default BrowseResults;
