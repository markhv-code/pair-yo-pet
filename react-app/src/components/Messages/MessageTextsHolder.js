import React from 'react';
import { useOtherUserContext } from './index';

export default function MessageTextsHolder({
  lgdInUser,
  allMsgsWOtherUser,
}) {
  const { otherUser } = useOtherUserContext();

  return (
    <div className='messages__container messages__texts-holder'>
      <h1>
        Message: {otherUser ? otherUser.username : 'No Conversation Selected'}
      </h1>
      {otherUser &&
        allMsgsWOtherUser.map((msg) => (
          <div
            style={
              lgdInUser.id === msg.sender.id ? { alignSelf: 'flex-end' } : {}
            }
            key={msg.id}
          >
            <p className='single-message-text'>
              {msg.sender.username}: {msg.message}
            </p>
          </div>
        ))}
    </div>
  );
}
