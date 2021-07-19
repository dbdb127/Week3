import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const UpdateOne = ({
  clickEvent,
  label,
  amount,
  categoryId,
  date,
  accountId,
  setSendEdit,
  closeModal,
}) => {
  const updateUrl = 'http://172.10.18.176/transaction/updateOne';

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
    },
  };

  const { isLoading, error, data } = useQuery('updateOne', async () => {
    let tmpType = 'INCOME';
    if (clickEvent.title.slice(0, 1) === '-') {
      tmpType = 'EXPENDITURE';
    }

    const response = await axios.post(
      updateUrl,
      {
        transactionId: clickEvent.index,
        content: label,
        amount: amount,
        categoryId: categoryId,
        type: tmpType,
        createdAt: date,
        accountId: accountId,
      },
      config,
    );
    console.log(response);
    return response;
  });

  if (error) {
    console.log('error');
  }

  setSendEdit(false);
  closeModal(false);

  return <div></div>;
};

export default UpdateOne;