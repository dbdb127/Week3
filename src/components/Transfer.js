import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Transfer.css';
import GetAllAccount from '../query/GetAllAccount';
import GetAllCategories from '../query/GetAllCategories';
import SendCardSlider from './SendCardSlider';
import Send from '../query/Send';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const style = {
  background: '#333333',
  color: 'white',
};

const Transfer = ({ setOpenTransfer, setOpenCardList, selectAccount }) => {
  //data 담아놓을 cache
  const [getAllAccountData, setGetAllAccountData] = useState([]);
  const [getAllCategoriesData, setGetAllCategoriesData] = useState([]);

  //변수 지정
  const [incomeCategoryList, setIncomeCategoryList] = useState([]);
  const [outcomeCategoryList, setOutcomeCategoryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('');
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState('');
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');
  const [accountId, setAccountId] = useState(0);
  const [send, setSend] = useState(false);
  const [balance, setBalance] = useState([]);

  const date = new Date().toLocaleString().slice(0, 11);

  let tmpBalance = [];

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

  useEffect(() => {
    setCategoryList(outcomeCategoryList);
  }, [outcomeCategoryList]);

  useEffect(() => {
    cardName.map((el, i) => {
      if (el === selectAccount) {
        setAccountId(i);
      }
    });
  }, [getAllAccountData]);

  useEffect(() => {
    getAllAccountData.map((el) => {
      tmpBalance.push(el.balance);
    });

    setBalance(tmpBalance);
  }, [getAllAccountData]);

  const validateForm = () => {
    if (!category) {
      alert("Please check 'Category'.");
      return false;
    }
    if (!account) {
      alert("Please check 'Account'.");
      return false;
    }
    if (!receiver) {
      alert("Please check 'Receiver'.");
      return false;
    }
    if (!label) {
      alert("Please check 'Label'.");
      return false;
    }
    if (!amount) {
      alert("Please check 'Amount'.");
      return false;
    }
    

    return true;
  };

  const onSubmit = (event) => {
    if (!validateForm()) {
      return;
    }

    //accountId 구하기
    getAllAccountData.map((el) => {
      if (el.name === account) {
        setAccountId(el.id);
      }
    });

    setSend(true);
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="transferModalBackground"
          variants={modalBackground}
          initial="hidden"
          animate="visible"
        >
          <GetAllAccount
            setAccountList={setAccountList}
            setGetAllAccountData={setGetAllAccountData}
          />

          <GetAllCategories
            setIncomeCategoryList={setIncomeCategoryList}
            setOutcomeCategoryList={setOutcomeCategoryList}
            setCategoryList={setCategoryList}
            setGetAllCategoriesData={setGetAllCategoriesData}
          />
          <div className="transferModalContainer">
            <div className="header">
              <div className="title">
                <h2>Remittance</h2>
              </div>
              <div className="titleCloseBtn">
                <button onClick={() => setOpenTransfer(false)}>X</button>
              </div>
            </div>
            <div className="body">
              <div className="date">{date}</div>
              <div className="category">
                {categoryList.map((el) => {
                  return (
                    <button
                      style={category === el ? style : null}
                      onClick={() => setCategory(el)}
                    >
                      {el}
                    </button>
                  );
                })}
              </div>
              <div className="cardType">
                <SendCardSlider
                  accountList={accountList}
                  account={account}
                  setAccount={setAccount}
                  accountId={accountId}
                  balance={balance}
                />
              </div>
              <input
                className="input"
                type="text"
                placeholder="Receiver"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
              <input
                className="input"
                type="text"
                placeholder="Label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
              <input
                className="input"
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="footer">
              <button onClick={onSubmit} id="sendBtn">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {send ? (
        <Send
          accountId={accountId}
          setSend={setSend}
          amount={amount}
          label={label}
          receiver={receiver}
          category={category}
          date={date}
          setOpenTransfer={setOpenTransfer}
        />
      ) : null}
      {setOpenCardList(false)}
    </div>
  );
};

export default Transfer;
