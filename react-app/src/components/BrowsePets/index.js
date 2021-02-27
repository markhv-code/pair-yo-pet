import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getPets} from '../../store/pets'


import './BrowsePets.css';

const BrowsePets = () => {
    const [search, setSearch] = useState("");
    const [filteredPets, setFilteredPets] = useState([]);
    const petsFromStore = useSelector((state) => Object.values(state.pets));
    const lgdInUser = useSelector((state) => state.session.user)
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    
    useEffect(() => {
        dispatch(getPets())
    }, [dispatch]);
    
    
    useEffect(() => {
        setFilteredPets(
            petsFromStore.filter((pet) => 
            pet.name.toLowerCase().includes(search.toLowerCase()) ||
            pet.petType.toLowerCase().includes(search.toLowerCase()) ||
            pet.owner.city.toLowerCase().includes(search.toLowerCase()) ||
            pet.owner.stateAbbr.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])

if (!filteredPets) return null;

return (
    <>
        <div className='browse__container'>
            <div className='browse__bar'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Find New Friends' type='text'/>
            </div>
        </div>
        
        <div className = 'result__container'>
            {filteredPets.map((pet) => {
                const { id, imageURL, name } = pet;
                return (
                    <div className='tile__results' key={id}>
                        <div onClick={() => {
                            if (!!lgdInUser) {
                                history.push(`/pets/${id}`)
                            } else {
                                window.alert('Please log in to view pet details');
                            }
                            }}>
                                <div className='pet__card'>
                                    <img src={imageURL} alt=""/>
                                    <div className='pet__card-info'>
                                        <h3>{name}</h3>
                                        <h4>{pet.owner.city}, {pet.owner.stateAbbr}</h4>
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
)}


export default BrowsePets;