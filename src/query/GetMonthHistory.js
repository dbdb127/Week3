import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

//db에서 월별 data 가져오기
const GetMonthHistory = ({
  index,
  setHistory,
  setMonthData,
  income,
  setIncome,
  outcome,
  setOutcome,
}) => {
  const tmp = index + 1;
  const MonthUrl =
    'http://172.10.18.176/transaction/history?year=2021&month=' + tmp;

  const { isLoading, error, data } = useQuery('monthData', async () => {
    try {
      const res = await axios.get(MonthUrl, {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyNjc3MTM5Nn0.V7tnQ_gcSYBZOx4GiHNiu47aIP2TxypxTy5K2YSUkiE',
        },
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });

  let year = 0;
  let month = 0;
  let day = 0;
  let hour = 0;
  let min = 0;

  useEffect(() => {
    let tmpList = [];
    let tmpIncome = 0;
    let tmpOutcome = 0;
    data?.map((el) => {
      let tmpTitle = '';
      if (el.type === 'INCOME') {
        tmpTitle = '+' + el.amount;
        tmpIncome += el.amount;
      } else {
        tmpTitle = '-' + el.amount;
        tmpOutcome += el.amount;
      }

      year = el.createdAt.slice(0, 4);
      month = el.createdAt.slice(5, 7) - 1;
      day = el.createdAt.slice(8, 10);
      hour = el.createdAt.slice(11, 13);
      min = el.createdAt.slice(14, 16);

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

    setIncome([
      ...income.slice(0, month),
      tmpIncome.toLocaleString('ko-KR'),
      ...income.slice(month + 1),
    ]);
    setOutcome([
      ...outcome.slice(0, month),
      tmpOutcome.toLocaleString('ko-KR'),
      ...outcome.slice(month + 1),
    ]);
  }, [data]);

  return <div></div>;
};
export default GetMonthHistory;
