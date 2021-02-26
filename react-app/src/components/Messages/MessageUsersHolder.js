import React from 'react'
import { useSelector } from 'react-redux';

export default function MessageUsersHolder({ setOtherUserId }) {
  const loginUserId = useSelector((state) => state.session.user.id);

  
  return (
    <div className='messages_users-holder'>
      <h1>Message Users Holder</h1>
    </div>
  );
}