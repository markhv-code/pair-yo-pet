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

  return (
    <>
      {!!conversationsUsers && (
        <div className='messages__container messages_users-holder'>
          <h1>Message Users Holder</h1>
          {conversationsUsers.map((user) => {
            return (
              <div
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
