import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

// import components
import MessageUsersHolder from './MessageUsersHolder';
import MessageTextsHolder from './MessageTextsHolder';

import './Messages.css';

const OtherUserContext = createContext();
export const useOtherUserContext = () => useContext(OtherUserContext);

export default function Messages() {
  // grab states from store
  const lgdInUser = useSelector((state) => state.session.user);
  const allMsgs = useSelector((state) => state.messages);
  const allUsers = useSelector((state) => state.users);
  
  // set up state for context provider
  const [otherUser, setOtherUser] = useState(null);

  // customize state needs to pass in to children as props
  const msgsArray = Object.values(allMsgs);
  const allMsgsLgdInUser = msgsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );
  const allMsgsWOtherUser = allMsgsLgdInUser.filter((message) => {
    const idToCheck = otherUser ? otherUser.id : allUsers[2];
    return message.senderId === idToCheck || message.receiverId === idToCheck;
  });

  return (
    <>
      {allUsers && lgdInUser && allMsgsLgdInUser && allMsgsWOtherUser && (
        <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
          <div className='messages'>
            <MessageUsersHolder
              allUsers={allUsers}
              lgdInUser={lgdInUser}
              allMsgsLgdInUser={allMsgsLgdInUser}
            />
            <MessageTextsHolder
              lgdInUser={lgdInUser}
              allMsgsWOtherUser={allMsgsWOtherUser}
            />
          </div>
        </OtherUserContext.Provider>
      )}
    </>
  );
}
