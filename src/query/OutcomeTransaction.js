import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const OutcomeTransaction = ({
  accountId,
  amount,
  categoryId,
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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjc2MDc4OX0.FlOBhJXNEvceuwSN_stUfwuQy03jR0qpc_fLQVazVbo',
    },
  };

  const { isLoading, error, data } = useQuery('sendOutcome', async () => {
    const response = await axios.post(
      outcomeUrl,
      {
        amount: amount,
        categoryId: categoryId,
        content: label,
        date: date,
      },
      config,
    );
    console.log(response);
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
