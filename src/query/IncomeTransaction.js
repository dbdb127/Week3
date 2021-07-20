import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const IncomeTransaction = ({
  accountId,
  amount,
  categoryId,
  label,
  date,
  setSendIncome,
  closeModal,
}) => {
  const incomeUrl = 'http://172.10.18.176/transaction/income/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjc2MDc4OX0.FlOBhJXNEvceuwSN_stUfwuQy03jR0qpc_fLQVazVbo',
    },
  };

  const { isLoading, error, data } = useQuery('sendIncome', async () => {
    const response = await axios.post(
      incomeUrl,
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
  setSendIncome(false);
  closeModal(false);

  return <div></div>;
};

export default IncomeTransaction;
