import React, { useState } from 'react';
import sendEmail from '@lib/email';
import Input from '@components/footer/input';
import TextArea from '@components/footer/text_area';
import Spinner from '@components/footer/spinner';
import * as styles from './styles';

const Form = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [notice, setNotice] = useState({
    message: '',
    code: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const json = await sendEmail(name, email, message);

    setLoading(false);
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

  const messageValid = message.length > 10;
  const emailValid = email.length > 0 && email.includes('@') && email.includes('.');
  const nameValid = name.length > 0;

  const displayNotice = notice.message.length > 0;

  const disabled = isMessageSent || !emailValid || !messageValid || !nameValid || loading;

  return (
    <styles.FormContainer className="focus-me">
      <styles.Anchor id="contact" />
      <styles.FormTitle>Do you want to say hi?</styles.FormTitle>
      <styles.Message displayNotice={displayNotice} isSuccess={notice.code === 'success'}>
        {notice.message}
      </styles.Message>
      <styles.Form onSubmit={handleSubmit}>
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
        <styles.SubmitButton
          type="submit"
          disabled={disabled}
        >
          {loading ? <Spinner /> : 'Send'}
        </styles.SubmitButton>
      </styles.Form>
    </styles.FormContainer>
  );
};

export default Form;
