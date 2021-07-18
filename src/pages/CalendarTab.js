import React, { useState } from 'react';
import SwipeView from '../components/SwipeView';
import CalendarGrid from '../components/CalendarGrid';
import './CalendarTab.css';

const CalendarTab = () => {
  //7월로 setting
  const [index, setIndex] = useState(6);

  //한 달 전으로 이동
  const changeIndex_minus = () => {
    setIndex(index - 1);
  };

  //한 달 후로 이동
  const changeIndex_plus = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <SwipeView
        index={index}
        changeIndex_minus={changeIndex_minus}
        changeIndex_plus={changeIndex_plus}
      />

      <div className="box">
        <div className="blue_box">+text</div>
        <div className="red_box">-text</div>
      </div>

      <CalendarGrid
        index={index}
      />
    </>
  );
};

export default CalendarTab;
