import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import MessageUsersHolder from './MessageUsersHolder';
import MessageTextHolder from './MessageTextsHolder';

import './Messages.css';

const CurUsrToMsgContext = createContext();
export const useCurUsrToMsgContext = () => useContext(CurUsrToMsgContext);

export default function Messages() {
  const [curUsrToMsg, setCurUsrToMsg] = useState(null);

  const msgsFrmStore = useSelector((state) => state.messages);

  return (
    <CurUsrToMsgContext.Provider value={{ curUsrToMsg, setCurUsrToMsg }}>
      <div className='messages'>
        <MessageUsersHolder setCurUsrToMsg={setCurUsrToMsg} />
        <MessageTextHolder curUsrToMsg={curUsrToMsg} />
      </div>
    </CurUsrToMsgContext.Provider>
  );
}
