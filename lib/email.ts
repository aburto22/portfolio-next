import emailjs from '@emailjs/browser';

const sendEmail = async (
  name: string,
  email: string,
  message: string,
): Promise<{ status: string }> => {
  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    );

    return { status: 'success' };
  } catch (err) {
    return { status: 'error' };
  }
};

export default sendEmail;
