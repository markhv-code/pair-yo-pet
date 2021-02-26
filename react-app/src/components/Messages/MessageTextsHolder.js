import React from 'react';
import { useSelector } from 'react-redux';


export default function MessageTextsHolder({ curUsrToMsg }) {
  const loginUserId = useSelector((state) => state.session.user.id)
  const msgsFrmStore = useSelector((state) => state.messages);
  const msgsArray = Object.values(msgsFrmStore);
  const filteredMsgs = msgsArray.filter(
    message => ((message.senderId === curUsrToMsg && loginUserId === message.reciverId) ||
      (message.reciverId === curUsrToMsg && loginUserId === message.senderId))
  )
    console.log(loginUserId, "----------current");
    console.log(curUsrToMsg, "----------cur");
    console.log(msgsArray, "----------msgsStore");
  return (
    <div className='messages_texts-holder'>
      <h1>Message Texts Holder</h1>
      {
        msgsArray.map(text => (
          <div key={text.id}>{text.message}</div>
        ))
      }
    </div>
  );
}
