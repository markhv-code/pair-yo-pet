import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../../store/messages';


export default function MessageFormForModal({receiverId}) {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  const lgdInUserId = useSelector((state) => state.session.user.id);

  const onSend = async function (e) {
    e.preventDefault();
    console.log("reciverID", receiverId);
    console.log("message", msg);
    console.log("loginUsr", lgdInUserId);
    const msgOrErrors = await dispatch(
      createMessage({
        senderId: lgdInUserId,
        receiverId: receiverId,
        message: msg,
      })
    );
    if (!msgOrErrors.errors) {
      setMsg('');
    }
  };

  return (
    <form onSubmit={onSend} className='msg-form'>
      <textarea
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className='msg-form__input'
        maxLength={500}
        rows={3}
        required
      />
      <button type='submit' className='msg-form__button'>
        <i className='fas fa-play fa-2x'></i>
      </button>
    </form>
  )
}
