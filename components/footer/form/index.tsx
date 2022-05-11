import React, { useState, useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
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

  const [darkTheme] = useContext(ThemeContext);

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
    notice.code === 'error' ? styles.messageError : styles.messageCorrect;

  const messageValid = message.length > 10;
  const emailValid =
    email.length > 0 && email.includes('@') && email.includes('.');
  const nameValid = name.length > 0;

  const isBtnActive = isMessageSent
    ? false
    : emailValid && messageValid && nameValid;

  return (
    <div className={`focus-me ${styles.formContainer} ${darkTheme && styles.formContainerDark}`}>
      <span id='contact' className={styles.anchor} />
      <h2 className={styles.formTitle}>
        Do you want to say hi?
      </h2>
      <p
        className={`${message} ${notice.code.length > 0 && noticeStyle}`}
      >
        {notice.message}
      </p>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
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
          className={`${styles.submitButton} ${darkTheme && styles.submitButtonDark} ${!isBtnActive && styles.submitButtonInactive}`}
          disabled={!isBtnActive}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;