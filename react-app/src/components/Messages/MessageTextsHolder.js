import React from 'react';
import { useOtherUserContext } from './index';

import MessageForm from './MessageForm';

export default function MessageTextsHolder({ lgdInUser, allMsgsWOtherUser }) {
  const { otherUser } = useOtherUserContext();

  return (
    <div className='messages__container messages__texts-holder'>
      <h1 className='messages__title'>
        {otherUser ? otherUser.username : 'No Conversation Selected'}
      </h1>
      <div className='messages__texts'>
        {otherUser &&
          allMsgsWOtherUser.map((msg) => (
            <div
              className={
                lgdInUser.id === msg.sender.id
                  ? 'messages__texts__right'
                  : 'messages__texts__left'
              }
              key={msg.id}
            >
              <p
                style={
                  lgdInUser.id === msg.sender.id
                    ? {
                        background: 'rgba(13, 51, 223, 0.65)',
                      }
                    : {}
                }
                className='single-message-text'
                title={msg.sender.username}
              >
                {msg.message}
              </p>
              <p className='timestamp'>{msg.timestamp}</p>
            </div>
          ))}
        <MessageForm />
      </div>
    </div>
  );
}
