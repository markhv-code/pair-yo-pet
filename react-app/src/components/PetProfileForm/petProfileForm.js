import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPet } from '../../store/pets';

import './petProfileForm.css';

// // Material UI compenents, try later to get them to work
// import Energy from './energySlider';
// import Social from './socialSlider';
// import Behavior from './behaviorSlider';
// import Size from './sizeSlider';
// import Environment from './environmentSlider';

function PetProfileForm({ setShowModal, petToUpdate }) {
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const [energy, setEnergy] = useState(1);
  const [social, setSocial] = useState(1);
  const [behaved, setBehaved] = useState(1);
  const [size, setSize] = useState('');
  const [env, setEnv] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!!petToUpdate) {
      setPetName(petToUpdate.name);
      setPetType(petToUpdate.petType);
      setAge(petToUpdate.age);
      setImage(petToUpdate.image);
      setEnergy(petToUpdate.energy);
      setSocial(petToUpdate.social);
      setBehaved(petToUpdate.behaved);
      setSize(petToUpdate.size);
      setEnv(petToUpdate.env);
      setDescription(petToUpdate.description);
    }
  }, [petToUpdate]);

  const createProfile = async (e) => {
    e.preventDefault();
    setErrors([]);
    let newErrors = [];

    const pet = {
      userId: currentUser.id,
      name: petName,
      petType,
      age,
      image,
      energy,
      social,
      behaved,
      size,
      env,
      description,
    };

    const petOrErrors = await dispatch(
      !!petToUpdate
        ? createPet(pet, petToUpdate.id) // if you pass in a pet id, it updates instead
        : createPet(pet)
    );
    if (petOrErrors.errors) {
      newErrors = petOrErrors.errors;
      setErrors(newErrors);
    } else {
      setShowModal(false);
      history.push(`/pets/${petOrErrors.id}`);
    }
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div>
      <h1>{!!petToUpdate ? 'Update Pet' : 'Add Pet'}</h1>
      <form onSubmit={createProfile} className='petForm'>
        <div>
          <label>Pet Name</label>
          <input
            name='petName'
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
            className='pet-form__input'
          />
        </div>
        <div>
          <label>Pet Type</label>
          <select
            name='petType'
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
            className='pet-form__input'
          >
            <option value='' disabled>
              -Select One-
            </option>
            <option value='Dog'>Dog</option>
            <option value='Reptile'>Reptile</option>
          </select>
        </div>
        <div>
          <label>Pet Age</label>
          <input
            type='number'
            name='age'
            min={0}
            max={50}
            value={age}
            onChange={(e) => {
              let age = e.target.value;
              if (age < 0) setAge(0);
              else if (age > 50) setAge(50);
              else setAge(Number(age));
            }}
            required
            className='pet-form__input'
          />
        </div>
        <label>
          Image
          <input className='image-upload' type='file' onChange={updateFile} />
        </label>
        <div>
          <label>
            Energy Level (1-5)
            <input
              type='range'
              min={1}
              max={5}
              value={energy}
              onChange={(e) => setEnergy(Number(e.target.value))}
              required
              className='pet-form__slider'
            />
          </label>
        </div>
        <div>
          <label>
            Social Level (1-5)
            <input
              type='range'
              min={1}
              max={5}
              value={social}
              onChange={(e) => setSocial(Number(e.target.value))}
              required
              className='pet-form__slider'
            />
          </label>
        </div>
        <div>
          <label>
            Well Behaved (1-5)
            <input
              type='range'
              min={1}
              max={5}
              value={behaved}
              onChange={(e) => setBehaved(Number(e.target.value))}
              required
              className='pet-form__slider'
            />
          </label>
        </div>
        <div>
          <label>
            Size
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              required
              className='pet-form__input'
            >
              <option value='' disabled>
                -Select One-
              </option>
              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>Large</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Environment
            <select
              value={env}
              onChange={(e) => setEnv(Number(e.target.value))}
              required
              className='pet-form__input'
            >
              <option value='' disabled>
                -Select One-
              </option>
              <option value={1}>Outdoor</option>
              <option value={2}>Both</option>
              <option value={3}>Indoor</option>
            </select>
          </label>
        </div>
        {/* <div>
          <Energy setEnergy={setEnergy} energy={energy} />
        </div>
        <div>
          <Social setSocial={setSocial} social={social} />
        </div>
        <div>
          <Behavior setBehaved={setBehaved} behaved={behaved} />
        </div>
        <div>
          <Size setSize={setSize} size={size} />
        </div>
        <div>
          <Environment setEnv={setEnv} env={env} />
        </div> */}
        <div>
          <div>
            <label>Pet description</label>
          </div>
          <textarea
            name='description'
            required={true}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder='(please keep it under 500 characters)'
            cols={35}
            rows={4}
            className='pet-form__input'
          ></textarea>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default PetProfileForm;
