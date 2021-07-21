import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const Receive = ({ type, setSendReply, transactionId, setIsPending }) => {
  const receiveUrl = 'http://172.10.18.176/transaction/receive';

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
    },
  };

  const { isLoading, error, data } = useQuery('receive', async () => {
    const response = await axios.post(
      receiveUrl,
      {
        transactionId: transactionId,
        reply: type,
      },
      config,
    );
    return response;
  });

  if (error) {
    console.log('error');
  }
  setSendReply(false);
  setIsPending(false);

  return <div></div>;
};

export default Receive;
