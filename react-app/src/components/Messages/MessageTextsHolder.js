import React from 'react';
import { useOtherUserContext } from './index';

import MessageForm from './MessageForm';

export default function MessageTextsHolder({ lgdInUser, allMsgsWOtherUser }) {
  const { otherUser } = useOtherUserContext();

  const formatDate = function (dateString) {
    let amPm = 'am';
    const date = new Date(dateString);
    let hours = date.getHours();
    if (hours >= 12) amPm = 'pm';
    if (hours > 12) hours -= 12;
    date.setHours(hours);
    const day = date.toDateString();
    const time = date.toTimeString().slice(0, 5);
    return `${day}, ${time} ${amPm}`;
  };

  const reversedMsgs = allMsgsWOtherUser.reverse();

  if (!otherUser.id) {
    return (
      <div className='messages__container messages__texts-holder'>
        <p>select conversation</p>
      </div>
    );
  }

  return (
    <div className='messages__container messages__texts-holder'>
      <h1 className='messages__title'>
        {otherUser.id ? otherUser.username : 'No Conversation Selected'}
      </h1>
      <div className='messages__texts-and-form'>
        <div className='messages__texts'>
          {otherUser &&
            reversedMsgs.map((msg) => (
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
                <p className='timestamp'>{formatDate(msg.timestamp)}</p>
              </div>
            ))}
        </div>
        <MessageForm />
      </div>
    </div>
  );
}
