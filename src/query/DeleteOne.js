import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const DeleteOne = ({ clickEvent, setSendDelete, closeModal }) => {
  const deleteUrl = 'http://172.10.18.176/transaction/deleteOne';

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
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
    console.log(response);
    return response;
  });

  if (error) {
    console.log('error');
  }

  setSendDelete(false);
  closeModal(false);
  return <div></div>;
};

export default DeleteOne;
