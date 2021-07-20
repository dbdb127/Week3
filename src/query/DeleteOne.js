import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const DeleteOne = ({
  clickEvent,
  setSendDelete,
  setOpenModal,
}) => {
  const deleteUrl = 'http://172.10.18.176/transaction/deleteOne';

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjc2MDc4OX0.FlOBhJXNEvceuwSN_stUfwuQy03jR0qpc_fLQVazVbo',
    },
  };

  const { isLoading, error, data } = useQuery('deleteOne', async () => {
    const response = await axios.post(
      deleteUrl,
      {
        transactionId: clickEvent.index,
      },
      config,
    );
    return response;
  });

  if (error) {
    console.log('error');
  }

  setSendDelete(false);
  setOpenModal(false);
  return (
    <div>
    </div>
  );
};

export default DeleteOne;
