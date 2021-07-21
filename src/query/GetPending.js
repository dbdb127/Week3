import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const GetPending = ({ setIsPending, setPendingData }) => {
  const pendingUrl = 'http://172.10.18.176/transaction/getPending';
  const { isLoading, error, data } = useQuery('GetPending', async () => {
    const response = await axios.get(pendingUrl, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
      },
    });

    return response.data.data;
  });

  if (data) {
    setIsPending(true);
  } else {
    setIsPending(false);
  }
  setPendingData(data);

  return <div></div>;
};

export default GetPending;
