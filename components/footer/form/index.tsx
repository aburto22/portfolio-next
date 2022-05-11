import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import Input from '../input';
import TextArea from '../text_area';
import styles from './styles.module.scss';

const Form = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [notice, setNotice] = useState({
    message: '',
    code: '',
  });

  init(process.env.REACT_APP_EMAILJS_USER_ID || '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        params
      )
      .then(() => {
        setEmail('');
        setMessage('');
        setName('');
        setNotice({ message: 'Your message has been sent.', code: 'success' });
        setIsMessageSent(true);
      })
      .catch(() =>
        setNotice({
          message: 'There was an error with your message. Please try again.',
          code: 'error',
        })
      );
  }

  const noticeStyle =
    notice.code === 'error' ? 'text-red-500 h-6' : 'text-green-500 h-4';

  const messageValid = message.length > 10;
  const emailValid =
    email.length > 0 && email.includes('@') && email.includes('.');
  const nameValid = name.length > 0;

  const isBtnActive = isMessageSent
    ? false
    : emailValid && messageValid && nameValid;

  return (
    <div className='bg-white px-1 py-8 rounded relative -top-32 border shadow focus-me w-full max-w-2xl dark:shadow-dark dark:bg-gray-dark-bg'>
      <span id='contact' className='w-0 h-0 absolute -top-36' />
      <h2 className='text-center pt-4 font-bold mb-2 text-2xl'>
        Do you want to say hi?
      </h2>
      <p
        className={`text-xs font-bold h-2 ${
          notice.code.length > 0 && noticeStyle
        } text-center break-normal w-56 mx-auto`}
      >
        {notice.message}
      </p>
      <form
        onSubmit={handleSubmit}
        className='px-4 mt-3 mb-2 flex flex-col w-full max-w-xs mx-auto'
      >
        <Input
          name='name'
          text='Name'
          field={name}
          setField={setName}
          fieldValid={nameValid}
        />
        <Input
          name='email'
          text='E-mail'
          field={email}
          setField={setEmail}
          fieldValid={emailValid}
        />
        <TextArea
          name='message'
          text='Message'
          field={message}
          setField={setMessage}
          fieldValid={messageValid}
        />
        <button
          type='submit'
          className={`py-2 px-8 rounded-lg text-center text-white bg-gradient-to-br from-blue-grad-i to-blue-grad-f  
            mb-3 shadow-md dark:shadow-md-dark ${
              !isBtnActive &&
              'opacity-50 hover:bg-gradient-to-br cursor-default'
            } ${isBtnActive && 'hover:bg-gradient-to-tl'} w-max mx-auto`}
          disabled={!isBtnActive}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;