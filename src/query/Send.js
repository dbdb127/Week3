import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const Send = ({
  accountId,
  setSend,
  amount,
  label,
  receiver,
  category,
  date,
  setOpenTransfer,
}) => {
  const sendUrl = 'http://172.10.18.176/transaction/send/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjc2MDc4OX0.FlOBhJXNEvceuwSN_stUfwuQy03jR0qpc_fLQVazVbo',
    },
  };

  const { isLoading, error, data } = useQuery('send', async () => {
    const response = await axios.post(
      sendUrl,
      {
        amount: amount,
        categoryName: category,
        accountSubId: receiver,
        content: label,
        date: date,
      },
      config,
    );

    if (response.data.ok === false) {
      alert('Out of balance!');
    }
    console.log('1', response.data.ok);
    return response;
  });

  console.log(data);

  if (error) {
    console.log('error');
  }

  setSend(false);
  setOpenTransfer(false);
  return <div></div>;
};

export default Send;
