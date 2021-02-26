import React from 'react';
import { useOtherUserContext } from './index';

export default function MessageUsersHolder({
  allUsers,
  lgdInUser,
  allMsgsLgdInUser,
}) {
  const { setOtherUser } = useOtherUserContext();

  const conversationsUserIdSet = new Set();

  allMsgsLgdInUser.forEach((msg) => {
    const idToAdd =
      msg.senderId === lgdInUser.id ? msg.receiverId : msg.senderId;
    conversationsUserIdSet.add(idToAdd);
  });

  const conversationsUsers = [];
  const arr = Array.from(conversationsUserIdSet);
  arr.forEach((id) => conversationsUsers.push(allUsers[id]));
  if (conversationsUsers.length === 0)
    conversationsUsers.push({ username: 'No message history' });

  return (
    <>
      {conversationsUsers.length > 0 && !!conversationsUsers[0] && (
        <div className='messages__container messages__users-holder'>
          <h1 className='messages__title'>Chats</h1>
          {conversationsUsers.map((user) => {
            return (
              <div
                className={
                  user.username === 'No message history'
                    ? 'messages__no-msg-history'
                    : 'messages__other-user'
                }
                key={user.id}
                onClick={() => {
                  setOtherUser(user);
                }}
              >
                {user.username}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
