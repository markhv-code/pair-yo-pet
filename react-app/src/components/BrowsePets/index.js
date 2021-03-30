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
    
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const [checkFour, setCheckFour] = useState(false);
    const [checkFive, setCheckFive] = useState(false);
    const [checkSix, setCheckSix] = useState(false);
    const [checkSeven, setCheckSeven] = useState(false);
    
    const aquaticChecked = () => setCheckOne(!checkOne);
    const birdChecked = () => setCheckTwo(!checkTwo);
    const catChecked = () => setCheckThree(!checkThree);
    const dogChecked = () => setCheckFour(!checkFour);
    const farmChecked = () => setCheckFive(!checkFive);
    const reptileChecked = () => setCheckSix(!checkSix);
    const otherChecked = () => setCheckSeven(!checkSeven);
    
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
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Find New Friends by Name, Type, & Location' type='text'/>
            </div>
        <div className='checkbox__container'>
            Aquatic
            <input type='checkbox' checked={checkOne} onChange={aquaticChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Bird
            <input type='checkbox' checked={checkTwo} onChange={birdChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Cat 
            <input type='checkbox' checked={checkThree} onChange={catChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Dog 
            <input type='checkbox' checked={checkFour} onChange={dogChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Farm
            <input type='checkbox' checked={checkFive} onChange={farmChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Reptile
            <input type='checkbox' checked={checkSix} onChange={reptileChecked} />
            <span className='checkmark'></span>
        </div>
        <div className='checkbox__container'>
            Other
            <input type='checkbox' checked={checkSeven} onChange={otherChecked} />
            <span className='checkmark'></span>
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