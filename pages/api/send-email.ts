import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/browser';

type Data = {
  status: string
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  const templateParams = {
    from_name: req.body.name,
    from_email: req.body.email,
    message: req.body.message,
  };

  // const data = {
  //   service_id: process.env.EMAILJS_SERVICE_ID || '',
  //   template_id: process.env.EMAILJS_TEMPLATE_ID || '',
  //   user_id: process.env.EMAILJS_PUBLIC_KEY || '',
  //   template_params: templateParams,
  // };

  try {
    // const json = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((fetchRes) => fetchRes.text());

    // console.log(json);

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || '',
      process.env.EMAILJS_TEMPLATE_ID || '',
      templateParams,
      process.env.EMAILJS_PUBLIC_KEY || '',
    );

    throw new Error();

    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error' });
  }
};

export default handler;
