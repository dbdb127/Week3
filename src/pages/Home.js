import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import NewModal from '../components/NewModal';

const list = ['1,', '2', '3'];

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <NewModal closeModal={setOpenModal} scrollable={true} />}
      <button className="addBtn" onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faPlus} className="plusIcon" size="2x" />
        <div className="text">Add History</div>
      </button>
    </>
  );
};

export default Home;
