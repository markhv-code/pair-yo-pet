import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getPets} from '../../store/pets'


import './BrowsePets.css';

const BrowsePets = () => {
    const [search, setSearch] = useState("");
    const [filteredPets, setFilteredPets] = useState([]);
    const petTypes = ["Aquatic", "Bird", "Cat", "Dog", "Farm", "Reptile", "Other"]
    const [selectedPetType, setSelectedPetType] = useState([]);
    const petsFromStore = useSelector((state) => Object.values(state.pets));
    const lgdInUser = useSelector((state) => state.session.user)
    
    // const [checkOne, setCheckOne] = useState(false);
    // const [checkTwo, setCheckTwo] = useState(false);
    // const [checkThree, setCheckThree] = useState(false);
    // const [checkFour, setCheckFour] = useState(false);
    // const [checkFive, setCheckFive] = useState(false);
    // const [checkSix, setCheckSix] = useState(false);
    // const [checkSeven, setCheckSeven] = useState(false);
    
    // const aquaticChecked = () => setCheckOne(!checkOne);
    // const birdChecked = () => setCheckTwo(!checkTwo);
    // const catChecked = () => setCheckThree(!checkThree);
    // const dogChecked = () => setCheckFour(!checkFour);
    // const farmChecked = () => setCheckFive(!checkFive);
    // const reptileChecked = () => setCheckSix(!checkSix);
    // const otherChecked = () => setCheckSeven(!checkSeven);
    
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
    }, [search]);

    
    const handleSelect = petType => {
        const isSelected = selectedPetType.includes(petType);

        const newSelection = isSelected
        ? selectedPetType.filter(currentPetType => currentPetType !== petType)
        : [...selectedPetType, petType];
    setSelectedPetType(newSelection);
    }

if (!filteredPets) return null;

return (
    <>
        <div className='browse__container'>
            <div className='browse__bar'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Find New Friends by Name, Type, & Location' type='text'/>
            </div>
                <div className='pet__type-list'></div>
                    {petTypes.map((pet, index) => {
                        const isSelected = selectedPetType.includes(pet);
                        return (
                            <>
                                <label key={index}></label>
                                    <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => {
                                        handleSelect(pet)
                                    }}
                                    />
                                    <span className='pet__type-check'>{pet}</span>
                            </>
                        )
                    })}
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
                                        <h3>{pet.owner.city}, {pet.owner.stateAbbr}</h3>
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