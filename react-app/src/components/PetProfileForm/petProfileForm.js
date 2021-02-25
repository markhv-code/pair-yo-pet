import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
import { createPet } from '../../store/pets';

// // Material UI compenents, try later to get them to work
// import Energy from './energySlider';
// import Social from './socialSlider';
// import Behavior from './behaviorSlider';
// import Size from './sizeSlider';
// import Environment from './environmentSlider';

function PetProfileForm() {
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [age, setAge] = useState('');
  const [imgUrl, setImgUrl] = useState(
    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp'
  );
  const [image, setImage] = useState(null);
  const [energy, setEnergy] = useState(1);
  const [social, setSocial] = useState(1);
  const [behaved, setBehaved] = useState(1);
  const [size, setSize] = useState('');
  const [env, setEnv] = useState('');
  const [description, setDescription] = useState('');

  // DO ERRORS!!!!!!

  const createProfile = (e) => {
    e.preventDefault();
    const pet = {
      userId: currentUser.id,
      name: petName,
      petType,
      age,
      imageURL: imgUrl,
      image,
      energy,
      social,
      behaved,
      size,
      env,
      description,
    };
    dispatch(createPet(pet));
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <form onSubmit={createProfile} className='petForm'>
      <div>
        <label>Pet Name</label>
        <input
          name='petName'
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pet Type</label>
        <select
          name='petType'
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          required
        >
          <option value='' disabled>
            -Select Type-
          </option>
          <option value='Dog'>Dog</option>
        </select>
      </div>
      <div>
        <label>Pet Age</label>
        <input
          type='number'
          name='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pet Pic</label>
        <input
          name='imgUrl'
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </div>
      <label>
        Image
        <input className='image-upload' type='file' onChange={updateFile} />
      </label>
      <div>
        <label>
          Energy
          <input
            type='range'
            min='1'
            max='5'
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Social
          <input
            type='range'
            min='1'
            max='5'
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Behaved
          <input
            type='range'
            min='1'
            max='5'
            value={behaved}
            onChange={(e) => setBehaved(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Size
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          >
            <option value='' disabled>
              -Select Size-
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
          <select value={env} onChange={(e) => setEnv(e.target.value)} required>
            <option value='' disabled>
              -Select Environment-
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
        <label>Pet description</label>
        <textarea
          name='description'
          required={true}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder='please keep it under 500 characters'
        ></textarea>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default PetProfileForm;
