const SET_PETS_PROFILE = 'pets/setPetProfile'
const DISPLAY_MULTIPLE_PROFILES = 'pets/displayMultipleProfiles'

export const setPetProfile = (pet) => ({
    type: SET_PETS_PROFILE,
    payload: pet,
});

export const displayMultipleProfiles = (pets) => ({
    type: DISPLAY_MULTIPLE_PROFILES,
    payload: pets,
});

export const getPetProfile = (id) => async (dispatch) => {
    const res = await fetch(`api/pets/${id}`);
    if (res.ok) {
        dispatch(setPetProfile(res.data.pet))
        return res;
    }
}

export const getMultipleProfiles = () => async (dispatch) => {
    const res = await fetch(`/api/pets`);
    if (res.ok) {
        dispatch(displayMultipleProfiles(res.data.pets));
        return res;
    }
}

let initialState = {};

const petReducer = (state = initialState,action) => {
    let newState = {...state};
    switch(action.type) {
        case SET_PETS_PROFILE:
            newState[action.payload.id] = action.payload;
            return newState;
        case DISPLAY_MULTIPLE_PROFILES:
            for (let pet of action.payload) {
                newState[pet.id] = pet;
            }
            return newState;
        default:
            return state;
    }
}

export default petReducer;