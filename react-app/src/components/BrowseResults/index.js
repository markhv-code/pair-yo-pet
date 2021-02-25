import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPets } from '../../store/pets';
import './BrowseResults.css'

const BrowseResults = () => {
    const dispatch = useDispatch();
    const petResults = useSelector((state) => Object.values(state.pets));
  
    useEffect(() => {
        dispatch(getPets())
    }, [dispatch])

    if (!petResults) return null;
    return (
            <>
                { petResults.map(petResult => {
                    const { id, imgURL, name } = petResult;
                    console.log(petResult);
                    return (
                        <div className='result__container' key={id}>
                            <div className='tile__results'>
                                <Link to={`/pets/${id}`}>
                                    <div className='pet__card'>
                                        <img src={imgURL} alt=""/>
                                        <div className='pet__card-info'>
                                            <h2>{name}</h2>
                                        </div>
                                    </div>
                                </Link>       
                            </div>
                        </div>
                    )
                })}
            </>
    )
}


export default BrowseResults;
