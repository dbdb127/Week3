import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const OutcomeTransaction = ({
  accountId,
  amount,
  category,
  label,
  date,
  setSendOutcome,
  closeModal,
}) => {
  const outcomeUrl =
    'http://172.10.18.176/transaction/expenditure/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
    },
  };

  const { isLoading, error, data } = useQuery('sendOutcome', async () => {
    const response = await axios.post(
      outcomeUrl,
      {
        amount: amount,
        categoryName: category,
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

  setSendOutcome(false);
  closeModal(false);

  return <div></div>;
};

export default OutcomeTransaction;
