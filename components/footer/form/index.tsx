import React, { useState } from 'react';
import { useAppSelector } from '../../../hooks/use_redux';
import Input from '../input';
import TextArea from '../text_area';
import sendEmail from '../../../lib/email';
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

  const darkTheme = useAppSelector((state) => state.darkTheme);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const json = await sendEmail(name, email, message);

    if (json.status === 'error') {
      setNotice({
        message: 'There was an error with your message. Please try again.',
        code: 'error',
      });
      return;
    }
    setNotice({ message: 'Your message has been sent.', code: 'success' });
    setName('');
    setEmail('');
    setMessage('');
    setIsMessageSent(true);
  };

  const messageStyle = notice.code === 'error' ? styles.messageError : styles.messageCorrect;

  const messageValid = message.length > 10;
  const emailValid = email.length > 0 && email.includes('@') && email.includes('.');
  const nameValid = name.length > 0;

  const isBtnActive = isMessageSent
    ? false
    : emailValid && messageValid && nameValid;

  return (
    <div className={`focus-me ${styles.formContainer} ${darkTheme && styles.formContainerDark}`}>
      <span id="contact" className={styles.anchor} />
      <h2 className={styles.formTitle}>
        Do you want to say hi?
      </h2>
      <p
        className={`${styles.message} ${notice.code.length > 0 && messageStyle}`}
      >
        {notice.message}
      </p>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Input
          name="name"
          text="Name"
          field={name}
          setField={setName}
          fieldValid={nameValid}
        />
        <Input
          name="email"
          text="E-mail"
          field={email}
          setField={setEmail}
          fieldValid={emailValid}
        />
        <TextArea
          name="message"
          text="Message"
          field={message}
          setField={setMessage}
          fieldValid={messageValid}
        />
        <button
          type="submit"
          className={`${styles.submitButton} ${darkTheme && styles.submitButtonDark} ${!isBtnActive && styles.submitButtonInactive}`}
          disabled={!isBtnActive}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
