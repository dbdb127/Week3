import React, { useState, useEffect, useRef } from 'react';
import GetAllAccount from '../query/GetAllAccount';
import { motion, AnimatePresence } from 'framer-motion';
import './CardList.css';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const CardList = ({
  openCardList,
  setOpenCardList,
  setOpenTransfer,
  setSelectAccount,
}) => {
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

  let cardName = [];
  accountList.map((el) => {
    if (el.includes('신한') || el.includes('shinhan')) {
      cardName.push('shinhan');
    } else if (el.includes('삼성') || el.includes('samsung')) {
      cardName.push('samsung');
    } else if (el.includes('카카오') || el.includes('kakao')) {
      cardName.push('kakao');
    } else if (el.includes('롯데') || el.includes('lotte')) {
      cardName.push('lotte');
    } else if (el.includes('우리') || el.includes('woori')) {
      cardName.push('woori');
    } else if (el.includes('현금') || el.includes('cash')) {
      cardName.push('cash');
    } else if (el.includes('현대') || el.includes('hyundai')) {
      cardName.push('hyundai');
    } else if (el.includes('비씨') || el.includes('bc')) {
      cardName.push('bc');
    } else {
      cardName.push('default');
    }
  });

  const onSubmit = (name) => {
    setSelectAccount(name);
    setOpenTransfer(true);
  };

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
                  className={`card0 ${cardName[i] + '1'}`}
                  onClick={() => onSubmit(cardName[i])}
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
