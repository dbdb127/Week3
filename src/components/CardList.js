import React, { useState, useEffect, useRef } from 'react';
import GetAllAccount from '../query/GetAllAccount';
import { motion, AnimatePresence } from 'framer-motion';
import './CardList.css';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const CardList = ({ openCardList, setOpenCardList, setOpenTransfer }) => {
  const modalEl = useRef();
  const [accountList, setAccountList] = useState([]);
  const [getAllAccountData, setGetAllAccountData] = useState([]);

  const handleClickOutside = ({ target }) => {
    if (openCardList && modalEl.current && !modalEl.current.contains(target)) {
      setOpenCardList(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="modalBackground"
          variants={modalBackground}
          initial="hidden"
          animate="visible"
        >
          <GetAllAccount
            setAccountList={setAccountList}
            setGetAllAccountData={setGetAllAccountData}
          />
          <div className="cardModalBackground">
            <div ref={modalEl} className="cardModalContainer">
              <div className="text">Manage Your Payments</div>
              {accountList.map((el, i) => (
                <button
                  className={'account' + i}
                  onClick={() => setOpenTransfer(true)}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CardList;
