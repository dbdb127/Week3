import React, { useState } from 'react';
import SwipeView from '../components/SwipeView';
import CalendarGrid from '../components/CalendarGrid';

const CalendarTab = () => {
  //7월로 setting
  const [index, setIndex] = useState(6);

  //한 달 전으로 이동
  const changeIndex_minus = () => {
    setIndex(index-1);
  }

  //한 달 후로 이동
  const changeIndex_plus = () => {
      setIndex(index+1);
  }

  return (
    <>
      <SwipeView/>
      <CalendarGrid index={0}/>
    </>
  );
};

export default CalendarTab;