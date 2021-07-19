import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

//db에서 월별 data 가져오기
const GetMonthHistory = ({ index, setHistory, setMonthData }) => {
  const tmp = index + 1;
  const MonthUrl =
    'http://172.10.18.176/transaction/history?year=2021&month=' + tmp;

  const { isLoading, error, data } = useQuery('monthData', async () => {
    try {
      const res = await axios.get(MonthUrl, {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
        },
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });

  useEffect(() => {
    let tmpList = [];
    data?.map((el) => {
      let tmpTitle = '';
      if (el.type === 'INCOME') {
        tmpTitle = '+' + el.amount;
      } else {
        tmpTitle = '-' + el.amount;
      }

      let year = el.createdAt.slice(0, 4);
      let month = el.createdAt.slice(5, 7) - 1;
      let day = el.createdAt.slice(8, 10);
      let hour = el.createdAt.slice(11, 13);
      let min = el.createdAt.slice(14, 16);

      tmpList.push({
        title: tmpTitle,
        allDay: false,
        start: new Date(year, month, day, hour, min),
        end: new Date(year, month, day, hour, min),
        index: el.id,
      });
    });

    setMonthData(data);
    setHistory(tmpList);
  }, [data]);

  return <div></div>;
};
export default GetMonthHistory;
