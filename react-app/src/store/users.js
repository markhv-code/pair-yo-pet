// Action types
const LOAD_USERS = '/users/LOAD_USERS';

// Action creators
const load = (users) => ({
    type: LOAD_USERS,
    users,
});


// Thunks
export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/users');
    const json = await res.json();
    if (res.ok) {
        dispatch(load(json.users));
    }
};


// Reducer
const initState = {
    
};

const userReducer = (state = initState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_USERS:
            for (let user of action.users) {
                newState[user.id] = user;
            }
            return newState;
        default:
            return newState;
    }
};

export default userReducer;
