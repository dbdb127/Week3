import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewModal from '../components/NewModal';
import styled from 'styled-components';


const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <NewModal closeModal={setOpenModal} scrollable={true} />}
      <AddBtn onClick={() => setOpenModal(true)}>
        <PlusIcon icon={faPlus} size="2x" />
        <Text>Add History</Text>
      </AddBtn>
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
  justify-content: center;
  margin: 0 auto;
  margin-left: 30px;
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

export default Home;
