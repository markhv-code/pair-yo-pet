import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import Energy from './energySlider';
import Social from './socialSlider';
import Behavior from './behaviorSlider';
import Size from './sizeSlider';
import Environment from './enviornmentSlider';

function PetProfileForm() {
    // const { userId } = useParams();
    // const currentUser = useSelector((state) => state.session.user);

    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [age, setAge] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [energy, setEnergy] = useState(null);
    const [social, setSocial] = useState(null);
    const [behaved , setBehaved] = useState(null);
    const [size, setSize] = useState(null);
    const [env, setEnv] = useState(null);
    const [description, setDescription] = useState('')
    
    const updatePetName = (e) => {
      setPetName(e.target.value);
    };

    const updatePetType = (e) => {
      setPetType(e.target.value);
    };

    const updatePetAge = (e) => {
      setAge(e.target.value);
    };

    const updateImgUrl = (e) => {
      setImgUrl(e.target.value);
    };

    const updatePetDescription = (e) => {
      setDescription(e.target.value);
    };

    const createProfile = (e) => {
        e.preventDefault();
    }


    return (
      <form onSubmit={createProfile} className="petForm">
        <div>
          <label>Pet Name</label>
          <input
            type="text"
            name="petName"
            onchange={updatePetName}
            value={petType}
          ></input>
        </div>
        <div>
          <label>Pet Type</label>
          <input
            type="text"
            name="petType"
            onchange={updatePetType}
            value={petName}
          ></input>
        </div>
        <div>
          <label>Pet Age</label>
          <input
            type="number"
            name="age"
            onchange={updatePetAge}
            value={age}
          ></input>
        </div>
        <div>
          <label>Pet Pic</label>
          <input
            type="imgUrl"
            name="imgUrl"
            onchange={updateImgUrl}
            value={imgUrl}
          ></input>
        </div>
        <div>
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
        </div>
        <div>
          <label>Pet description</label>
          <textarea
            name="description"
            required={true}
            onChange={updatePetDescription}
            value={description}
            placeholder="please keep it under 500 characters"
          ></textarea>
        </div>
      </form>
    );
}

export default PetProfileForm