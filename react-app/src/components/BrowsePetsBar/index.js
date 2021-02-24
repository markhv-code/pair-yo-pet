
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPets} from '../../store/pets'
import PetProfile from '../PetProfile'

import './BrowsePetsBar.css';

const BrowsePetsBar = () => {
    // const [pets] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredPets, setFilteredPets] = useState([]);
    const petsFromStore = useSelector((state) => Object.values(state.pets));
    // console.log('pets-----', petsFromStore);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        // setLoading(true);
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
    }, [search, petsFromStore])

    // if (loading) {
    //     return <p>Loading pets...</p>
    // }

return (
    <div className='browse__container'>
        <div className='browse__bar'>
            <input onChange={(e) => setSearch(e.target.value)} placeholder='Find New Friends' type='text'/>
            {filteredPets.map((pet, idx) => (
                <PetProfile key={idx} {...pet}/>
            ))}
        </div>
    </div>

)

}


export default BrowsePetsBar;