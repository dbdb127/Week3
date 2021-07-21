import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const IncomeTransaction = ({
  accountId,
  amount,
  category,
  label,
  date,
  setSendIncome,
  closeModal,
}) => {
  const incomeUrl = 'http://172.10.18.176/transaction/income/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
    },
  };


  const { isLoading, error, data } = useQuery('sendIncome', async () => {
    const response = await axios.post(
      incomeUrl,
      {
        amount: amount,
        categoryName: category,
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
