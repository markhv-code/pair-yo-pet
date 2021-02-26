import React from 'react';
import { useSelector } from 'react-redux';
import { useOtherUserContext } from './index';

export default function MessageUsersHolder() {
  const { setOtherUser } = useOtherUserContext();

  const lgdInUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.users);

  const msgsFrmStore = useSelector((state) => state.messages);
  const msgsArray = Object.values(msgsFrmStore);
  const filteredMsgs = msgsArray.filter(
    (message) =>
      message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
  );

  const conversationsUserIdSet = new Set();

  filteredMsgs.forEach((msg) => {
    const idToAdd =
      msg.senderId === lgdInUser.id ? msg.receiverId : msg.senderId;
    conversationsUserIdSet.add(idToAdd);
  });
  console.log('conversationsUserIdSet:', conversationsUserIdSet);

  const conversationsUsers = [];
  conversationsUserIdSet.forEach((id) => conversationsUsers.push(allUsers[id]));

  console.log('conversationsUsers:', conversationsUsers);

  return (
    <div className='messages__container messages_users-holder'>
      <h1>Message Users Holder</h1>
      {conversationsUsers.map((user) => {
        return <div key={user.id}>{user.username}</div>;
      })}
    </div>
  );
}
