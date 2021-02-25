// Action types
const LOAD_MESSAGES = '/messages/LOAD_MESSAGES';
const CREATE_MESSAGE = '/messages/CREATE_MESSAGE'; // also used for update
const REMOVE_MESSAGE = '/messages/REMOVE_MESSAGE'; // also used for update

// Action creators
const load = (messages) => ({
  type: LOAD_MESSAGES,
  messages,
});

const create = (message) => ({
  // also used for update
  type: CREATE_MESSAGE,
  message,
});

const remove = (messageId) => ({
  // also used for update
  type: REMOVE_MESSAGE,
  messageId,
});

// Thunks
export const getMessages = () => async (dispatch) => {
  const res = await fetch('/api/messages');
  const json = await res.json();
  if (res.ok) {
    dispatch(load(json.messages));
  }
};

// create is also used to update if messageId is passed in as second argument
export const createMessage = (message, messageIDtoUpdate = null) => async (
  dispatch
) => {
  const {
    userId,
    name,
    age,
    imageURL,
    image,
    messageType,
    energy,
    social,
    behaved,
    size,
    env,
    description,
  } = message;

  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('name', name);
  formData.append('age', age);
  formData.append('imageURL', imageURL);
  formData.append('messageType', messageType);
  formData.append('energy', energy);
  formData.append('social', social);
  formData.append('behaved', behaved);
  formData.append('size', size);
  formData.append('env', env);
  formData.append('description', description);

  if (image) formData.append('image', image);

  if (messageIDtoUpdate) {
    // for updating message
    const res = await fetch(`/api/messages/${messageIDtoUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (res.ok) {
      dispatch(create(res.data.updatedmessage));
    }
  } else {
    // for creating message
    const res = await fetch(`/api/messages`, {
      method: 'POST',
      body: formData,
    });
    const message = await res.json();

    if (!message.errors) {
      dispatch(create(message));
      return message;
    } else {
      const errors = message;
      return errors;
    }
  }
};

export const deletemessage = (messageId) => async (dispatch) => {
  const res = await fetch(`/api/messages/${messageId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(messageId));
  }
};

// Reducer
const initState = {
  1: {
    id: 1,
    userId: 1,
    name: '',
  },
};

const messageReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_MESSAGES:
      for (let message of action.messages) {
        newState[message.id] = message;
      }
      return newState;
    case CREATE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    case REMOVE_MESSAGE:
      delete newState[Number(action.messageId)];
      return newState;
    default:
      return newState;
  }
};

export default messageReducer;
