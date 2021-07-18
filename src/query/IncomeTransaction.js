import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const IncomeTransaction = ({
  accountId,
  amount,
  categoryId,
  label,
  date,
  sendIncome,
}) => {
  const accountUrl = 'http://172.10.18.176/transaction/income/:' + accountId;
  console.log('accountUrl', accountUrl);
  const { isLoading, error, data } = useQuery('sendIncome', async () => {
    const response = await axios.post(accountUrl, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
      },
      body: {
        amount: amount,
        categoryId: categoryId,
        content: label,
        data: date,
      },
    });
    console.log(data);
    return response;
  });

  if (error) {
    console.log('error');
  }

  console.log('2', sendIncome);

  return <div></div>;
};

export default IncomeTransaction;
