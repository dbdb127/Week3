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
  setOpenTransfer(false);
  const sendUrl = 'http://172.10.18.176/transaction/send/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
    },
  };

  console.log(date);

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
    return response;
  });

  if (error) {
    console.log('error');
  }

  setSend(false);
  return <div></div>;
};

export default Send;
