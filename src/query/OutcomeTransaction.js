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
  closeModal={closeModal}
}) => {
  const accountUrl =
    'http://172.10.18.176/transaction/expenditure/' + accountId;

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
    },
  };

  const { isLoading, error, data } = useQuery('sendOutcome', async () => {
    const response = await axios.post(
      accountUrl,
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
