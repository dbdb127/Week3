import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withTheme } from 'styled-components';
import './CardSlider.css';

const left = '<';
const right = '>';

const style = {
  border: 'solid black 4px',
  color: 'white',
};

const CardSlider = ({ accountList, account, accountId, setAccount }) => {
  const [cardIndex, setCardIndex] = useState(accountId);

  useEffect(() => {
    setCardIndex(accountId - 1);
  }, [accountId]);

  //한 달 전으로 이동
  const changeIndex_minus = () => {
    setCardIndex(cardIndex - 1);
  };

  //한 달 후로 이동
  const changeIndex_plus = () => {
    setCardIndex(cardIndex + 1);
  };

  return (
    <SwipeableViews
      enableMouseEvents
      index={cardIndex}
      disabled={Boolean(true)} //swipe 불가
    >
      {accountList.map((el, i) => (
        <>
          {i >= 1 ? (
            <button className="move" onClick={changeIndex_minus}>
              {left}
            </button>
          ) : null}
          <button
            className={'card' + i}
            style={el === account ? style : null}
            onClick={() => setAccount(el)}
          >
            {el}
          </button>
          {i < accountList.length - 1 ? (
            <button className="move" onClick={changeIndex_plus}>
              {right}
            </button>
          ) : null}
        </>
      ))}
    </SwipeableViews>
  );
};

export default CardSlider;
