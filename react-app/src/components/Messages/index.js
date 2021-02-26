import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import MessageUsersHolder from './MessageUsersHolder';
import MessageTextsHolder from './MessageTextsHolder';

import './Messages.css';

const OtherUserContext = createContext();
export const useOtherUserContext = () => useContext(OtherUserContext);

export default function Messages() {
  // grab states from store
  const allUsers = useSelector((state) => state.users);
  const lgdInUser = useSelector((state) => state.session.user);
  const allMsgs = useSelector((state) => state.messages);

  // set up state for context provider
  const [otherUser, setotherUser] = useState(allUsers[2]);

  // customize state needs to pass in to children as props
  const msgsArray = Object.values(allMsgs);
  const allMsgsLgdInUser = msgsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );
  const allMsgsWOtherUser = allMsgsLgdInUser.filter(
    (message) =>
      message.senderId === otherUser.id || message.receiverId === otherUser.id
  );

  return (
    <OtherUserContext.Provider value={{ otherUser, setotherUser }}>
      <div className='messages'>
        <MessageUsersHolder />
        <MessageTextsHolder
          allUsers={allUsers}
          lgdInUser={lgdInUser}
          allMsgsWOtherUser={allMsgsWOtherUser}
        />
      </div>
    </OtherUserContext.Provider>
  );
}
