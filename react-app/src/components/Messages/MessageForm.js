import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../store/messages';
import { useOtherUserContext } from './index';

export default function MessageForm() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState();

  const { otherUser } = useOtherUserContext();
  const lgdInUserId = useSelector((state) => state.session.user.id);

  const onSend = function (e) {
    e.preventDefault();
    dispatch(
      createMessage({
        senderId: lgdInUserId,
        receiverId: otherUser.id,
        message: msg,
      })
    );
  };

  return (
    <form onSubmit={onSend} className='msg-form'>
      <textarea
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className='msg-form__input'
        maxlength={500}
        rows={3}
        required
      />
      <button type='submit' className='msg-form__button'>
        <i class='fas fa-play fa-lg'></i>
      </button>
    </form>
  );
}
