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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
    },
  };

  const { isLoading, error, data } = useQuery('updateOne', async () => {
    let tmpType = 'INCOME';
    if (clickEvent.title.slice(0, 1) === '-') {
      tmpType = 'EXPENDITURE';
    }

    const response = await axios.put(
      updateUrl,
      {
        transactionId: clickEvent.index,
        content: label,
        amount: amount,
        categoryName: category,
        type: tmpType,
        createdAt: date,
        accountId: accountId,
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

  useEffect(() => {
    setSendEdit(false);
    setOpenModal(false);
  }, [data]);

  return <div></div>;
};

export default UpdateOne;
