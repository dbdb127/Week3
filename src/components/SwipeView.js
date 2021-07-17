import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './SwipeView.css';

const list = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const SwipeView = (props) => {
  return (
    <SwipeableViews
      enableMouseEvents
      index={props.index}
      disabled={Boolean(true)} //swipe 불가
    >
      {list.map((el, i) => (
        <>
          <div className="month_list">
            <div className="month_before">
              {i >= 1 ? (
                <div id="year">
                  2021
                  <br />
                </div>
              ) : null}
              <button
                className="month_btn_left"
                onClick={props.changeIndex_minus}
              >
                {list[i - 1]}
              </button>
            </div>
            <div className="month_current">
              <div id="year">
                2021
                <br />
              </div>
              {el}
            </div>
            <div className="month_after">
              {i <= 10 ? (
                <div id="year">
                  2021
                  <br />
                </div>
              ) : null}
              <button
                className="month_btn_right"
                onClick={props.changeIndex_plus}
              >
                {list[i + 1]}
              </button>
            </div>
          </div>
        </>
      ))}
    </SwipeableViews>
  );
};

export default SwipeView;
