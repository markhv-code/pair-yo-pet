import React from 'react';
import { useOtherUserContext } from './index';

export default function MessageTextsHolder({
  allUsers,
  lgdInUser,
  allMsgsWOtherUser,
}) {
  const { otherUser } = useOtherUserContext();

  return (
    <>
      {lgdInUser && allMsgsWOtherUser && (
        <div className='messages__container messages__texts-holder'>
          <h1>Message: {otherUser.username}</h1>
          {otherUser &&
            allMsgsWOtherUser.map((msg) => (
              <div
                style={lgdInUser.id === msg.sender.id ? { alignSelf: 'flex-end' } : {}}
                key={msg.id}
              >
                <p>
                  {msg.sender.username}: {msg.message}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
