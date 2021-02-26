import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import MessageUsersHolder from './MessageUsersHolder';
import MessageTextHolder from './MessageTextsHolder';

import './Messages.css';

const OtherUserIdContext = createContext();
export const useOtherUserIdContext = () => useContext(OtherUserIdContext);

export default function Messages() {
  const [otherUserId, setotherUserId] = useState(2);

  const msgsFrmStore = useSelector((state) => state.messages);

  return (
    <OtherUserIdContext.Provider value={{ otherUserId, setotherUserId }}>
      <div className='messages'>
        <MessageUsersHolder setotherUserId={setotherUserId} />
        <MessageTextHolder otherUserId={otherUserId} />
      </div>
    </OtherUserIdContext.Provider>
  );
}
