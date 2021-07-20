import React, { useState } from 'react';
import SwipeView from '../components/SwipeView';
import CalendarGrid from '../components/CalendarGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewModal from '../components/NewModal';
import styled from 'styled-components';

const CalendarTab = () => {
  const [openModal, setOpenModal] = useState(false);

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

  const [income, setIncome] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [outcome, setOutcome] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <>
      {openModal && <NewModal closeModal={setOpenModal} scrollable={true} />}
      <AddBtn onClick={() => setOpenModal(true)}>
        <PlusIcon icon={faPlus} size="2x" />
        <Text>Add History</Text>
      </AddBtn>
      <SwipeView
        index={index}
        changeIndex_minus={changeIndex_minus}
        changeIndex_plus={changeIndex_plus}
      />

      <Box>
        <BlueBox>{'+' + income[index]}</BlueBox>
        <RedBox>{'-' + outcome[index]}</RedBox>
      </Box>

      <CalendarGrid
        index={index}
        income={income}
        setIncome={setIncome}
        outcome={outcome}
        setOutcome={setOutcome}
      />
    </>
  );
};

const AddBtn = styled.button`
  background-color: black;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 2.6875rem;
  width: 12rem;
  height: 3.1875rem;
  -webkit-box-shadow: 0 0.25rem 1.875rem rgb(0 0 0 / 30%);
  box-shadow: 0 0.25rem 1.875rem rgb(0 0 0 / 30%);
  border-radius: 532.125rem;
  padding-left: 0.25rem;
  cursor: pointer;
  color: white;
  justify-content: flex-end;
  margin: 0 auto;
  margin-left: 30px;
  z-index: 5;
`;

const PlusIcon = styled(FontAwesomeIcon)`
  height: 30px;
  font-size: 2.8125rem;
  border-radius: 50%;
  vertical-align: baseline;
  display: inline-block;
  direction: ltr;
  text-align: center;
  text-align: center;
  margin-left: 12px;
`;

const Text = styled.div`
  width: 110%;
  text-align: center;
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 7px;
  margin-right: 7px;
`;

const Box = styled.div`
  width: 90%;
  margin: 40px auto;
  display: flex;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 600;
`;

const BlueBox = styled.div`
  border: 2.5px solid #166ff3;
  padding: 5px;
  flex: 1;
  width: 45%;
  margin-left: 27%;
  margin-right: 1%;
  border-radius: 15px;
  text-align: center;
  color: #166ff3;
`;

const RedBox = styled.div`
  border: 2.5px solid #f8123b;
  padding: 5px;
  flex: 1;
  width: 45%;
  margin-left: 1%;
  margin-right: 27%;
  border-radius: 15px;
  text-align: center;
  color: white;
  background-color: #f8123b;
`;

export default CalendarTab;
