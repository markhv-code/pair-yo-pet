// Action types
const LOAD_PETS = '/pets/LOAD_PETS';
const CREATE_PET = '/pets/CREATE_PET'; // also used for update
const REMOVE_PET = '/pets/REMOVE_PET'; // also used for update

// Action creators
const load = (pets) => ({
  type: LOAD_PETS,
  pets,
});

const create = (pet) => ({
  // also used for update
  type: CREATE_PET,
  pet,
});

const remove = (petId) => ({
  type: REMOVE_PET,
  petId,
});

// Thunks
export const getPets = () => async (dispatch) => {
  const res = await fetch('/api/pets');
  const json = await res.json();
  if (res.ok) {
    dispatch(load(json.pets));
  }
};

// create is also used to update if petId is passed in as second argument
export const createPet = (pet, petIDtoUpdate = null) => async (dispatch) => {
  const {
    userId,
    name,
    age,
    imageURL,
    image,
    petType,
    energy,
    social,
    behaved,
    size,
    env,
    description,
  } = pet;

  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('name', name);
  formData.append('age', age);
  formData.append('imageURL', imageURL);
  formData.append('petType', petType);
  formData.append('energy', energy);
  formData.append('social', social);
  formData.append('behaved', behaved);
  formData.append('size', size);
  formData.append('env', env);
  formData.append('description', description);

  if (image) formData.append('image', image);

  if (petIDtoUpdate) {
    // for updating pet
    const res = await fetch(`/api/pets/${petIDtoUpdate}`, {
      method: 'PUT',
      body: formData,
    });

    const updatedPet = await res.json();

    if (res.ok) {
      dispatch(create(updatedPet));
      return updatedPet;
    } else {
      const errors = pet;
      return errors;
    }
  } else {
    // for creating pet
    const res = await fetch(`/api/pets`, {
      method: 'POST',
      body: formData,
    });
    const pet = await res.json();

    if (!pet.errors) {
      dispatch(create(pet));
      return pet;
    } else {
      const errors = pet;
      return errors;
    }
  }
};

export const deletePet = (petId) => async (dispatch) => {
  const res = await fetch(`/api/pets/${petId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(petId));
  }
};

// Reducer
const initState = {};

const petReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_PETS:
      for (let pet of action.pets) {
        newState[pet.id] = pet;
      }
      return newState;
    case CREATE_PET:
      newState[action.pet.id] = action.pet;
      return newState;
    case REMOVE_PET:
      delete newState[Number(action.petId)];
      return newState;
    default:
      return newState;
  }
};

export default petReducer;
