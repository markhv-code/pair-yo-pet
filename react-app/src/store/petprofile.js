const SET_PET_PROFILE = "petprofile/set"
const SET_USER = "petprofile/user"
const GET_FORM_INPUT = "petprofile/getFormInput"
const SET_FORM_DETAILS = "petprofile/setFormDetails"

const set = (payload) => ({
    type: SET_PET_PROFILE,
    payload
});

const user = (payload) => ({
    type: SET_USER,
    payload
});

const getFormInput = (payload) => ({
    type: GET_FORM_INPUT,
    payload
});

const setFormDetails = (payload) => ({
    type: SET_FORM_DETAILS,
    payload
});

export const getPetProfile = (userId) => async (dispatch) => {
    const res = await fetch('api/pets');
    if (res.ok) {
        let response = await res.json();
        dispatch(set(response.petProfile))
        return response
    }
};

const initState = {};
const petProfileReducer = (state = initState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_PET_PROFILE:
      newState = {
        ...action.payload,
      };
      return newState;
    case SET_USER:
      newState = {
        ...action.payload,
      };
      return newState;
    case GET_FORM_INPUT:
      newState = {
        ...action.payload,
      };
      return newState;
    case SET_FORM_DETAILS:
      newState = {
        ...action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default petProfileReducer;
