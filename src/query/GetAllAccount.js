import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

//db에서 userAccountList 가져오기

const GetAllAccount = ({ setAccountList, setGetAllAccountData }) => {
  let tmpList = [];
  const accountUrl = 'http://172.10.18.176/acct/getall';
  const { isLoading, error, data } = useQuery('GetAllAccount', async () => {
    const response = await axios.get(accountUrl, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
      },
    });
    return response.data.data;
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  // if (!data) return null;

  data?.map((el) => {
    tmpList.push(el.name);
  });

  useEffect(() => {
    setAccountList(tmpList);
    setGetAllAccountData(data);
  }, [data]);

  return <div></div>;
};

export default GetAllAccount;
