import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const GetAllCategories = ({
  setIncomeCategoryList,
  setOutcomeCategoryList,
  setCategoryList,
  setGetAllCategoriesData,
}) => {
  //incomeCategories 가져오기
  let categoryUrl = 'http://172.10.18.176/category/getAllCategories';
  const { isLoading, error, data } = useQuery('GetAllCategories', async () => {
    const response = await axios.get(categoryUrl, {
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

  const tmpIncome = [];
  const tmpOutcome = [];

  data?.map((el) => {
    if (el.type === 'EXPENDITURE') {
      tmpOutcome.push(el.name);
    } else {
      tmpIncome.push(el.name);
    }
  });

  useEffect(() => {
    setIncomeCategoryList(tmpIncome);
    setCategoryList(tmpIncome);
    setGetAllCategoriesData(data);
    setOutcomeCategoryList(tmpOutcome);
  }, [data]);

  return <div></div>;
};

export default GetAllCategories;
