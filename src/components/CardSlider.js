import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
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
          {i >= 1 ? <Button onClick={changeIndex_minus}>{left}</Button> : null}
          <button
            className={'card' + i}
            style={el === account ? style : null}
            onClick={() => setAccount(el)}
          >
            {el}
          </button>
          {i < accountList.length - 1 ? (
            <Button onClick={changeIndex_plus}>{right}</Button>
          ) : null}
        </>
      ))}
    </SwipeableViews>
  );
};

const Button = styled.button`
  border: none;
  background-color: inherit;
  color: black;
  font-size: 45px;
  cursor: pointer;
  display: inline-block;
`;

export default CardSlider;
