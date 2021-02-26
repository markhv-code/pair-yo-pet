import React from 'react';
import { useSelector } from 'react-redux';

export default function MessageTextsHolder({ otherUserId }) {
  const loginUserId = useSelector((state) => state.session.user.id);
  const msgsFrmStore = useSelector((state) => state.messages);
  const msgsArray = Object.values(msgsFrmStore);
  const filteredMsgs = msgsArray.filter((message) => {
    return (
      (message.senderId === otherUserId &&
        message.receiverId === loginUserId) ||
      (message.senderId === loginUserId && message.receiverId === otherUserId)
    );
  });

  const otherUserObj =
    filteredMsgs[0].sender.id === otherUserId
      ? filteredMsgs[0].sender
      : filteredMsgs[0].receiver;

  return (
    <div className='messages_texts-holder'>
      <h1>Message: {otherUserObj.username}</h1>
      {filteredMsgs.map((text) => (
        <div
          style={loginUserId === text.sender.id ? { color: 'red' } : {}}
          key={text.id}
        >
          <p>
            {text.sender.username}: {text.message}
          </p>
        </div>
      ))}
    </div>
  );
}
