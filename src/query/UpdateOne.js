import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const UpdateOne = ({
  clickEvent,
  label,
  amount,
  category,
  date,
  accountId,
  setSendEdit,
  setOpenModal,
}) => {
  const updateUrl = 'http://172.10.18.176/transaction/updateOne';

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjc2MDc4OX0.FlOBhJXNEvceuwSN_stUfwuQy03jR0qpc_fLQVazVbo',
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
        category: category,
        type: tmpType,
        createdAt: date,
        accountId: accountId,
      },
      config,
    );

    return response;
  });

  if (error) {
    console.log('error');
  }

  useEffect(() => {
    setSendEdit(false);
    setOpenModal(false);
  }, [data]);

  return <div></div>;
};

export default UpdateOne;
