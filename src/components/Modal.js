import React, { useState, useEffect } from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';
import CardSlider from './CardSlider';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const style = {
  background: '#333333',
  color: 'white',
};

const Modal = ({ closeModal }) => {
  const [incomeSelect, setIncomeSelect] = useState(true);
  const [outcomeSelect, setOutcomeSelect] = useState(false);
  const [date, setDate] = useState('2021-07-17');
  const [categoryList, setCategoryList] = useState([
    '월급',
    '용돈',
    '기타 수입',
  ]);
  const [category, setCategory] = useState('월급');
  const [accountList, setAccountList] = useState([
    '346-20-0231-645',
    '346-21-0231-645',
    '346-22-0231-645',
    '346-23-0231-645',
    '346-24-0231-645',
    '346-25-0231-645',
  ]);
  const [account, setAccount] = useState('346-21-0231-645');
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');

  // useEffect(() => {
  //   //db에서 event에 해당하는 내용 가져오기
  //   effect;
  //   return () => {
  //     setIncomeSelect();
  //     setOutcomeSelect();
  //     setCategoryList();
  //     setCategory();
  //     setAccountList();
  //     setAccount();
  //     setLabel();
  //     setAmount();
  //     cleanup;
  //   };
  // }, [input]);

  const incomeCategory = () => {
    setIncomeSelect(true);
    setOutcomeSelect(false);
    setCategory('');

    //db에서 income category list 가져오기
    setCategoryList(['월급', '용돈', '기타 수입']);
  };

  const outcomeCategory = () => {
    setIncomeSelect(false);
    setOutcomeSelect(true);
    setCategory('');

    //db에서 outcome category list 가져오기
    setCategoryList([
      '식비',
      '생활',
      '쇼핑/뷰티',
      '교통',
      '의료/건강',
      '문화/여가',
      '미분류',
    ]);
  };

  const selectCategory = (el) => {
    setCategory(el);
  };

  const selectAccount = (el) => {
    setAccount(el);
  };

  const validateForm = () => {
    if (!category) {
      alert("Please check 'Category'.");
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
    // console.log('incomeSelect', incomeSelect);
    // console.log('outcomSelect', outcomeSelect);
    // console.log('date', date);
    // console.log('category', category);
    // console.log('account', account);
    // console.log('label', label);
    // console.log('amount', amount);

    closeModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="modalBackground"
        variants={modalBackground}
        initial="hidden"
        animate="visible"
      >
        <div className="modalContainer">
          <div className="header">
            <div className="title">
              <h2>Edit</h2>
            </div>
            <div className="titleCloseBtn">
              <button onClick={() => closeModal(false)}>X</button>
            </div>
          </div>
          <div className="body">
            <div className="type_indicator">
              <button
                style={incomeSelect ? style : null}
                className="income"
                onClick={incomeCategory}
              >
                Income
              </button>
              <button
                style={outcomeSelect ? style : null}
                className="expenditure"
                onClick={outcomeCategory}
              >
                Expenditure
              </button>
            </div>
            <div className="date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <div className="category">
              {categoryList.map((el) => {
                return (
                  <button
                    style={category === el ? style : null}
                    onClick={() => selectCategory(el)}
                  >
                    {el}
                  </button>
                );
              })}
            </div>
            <div className="cardType">
              <CardSlider
                accountList={accountList}
                account={account}
                selectAccount={selectAccount}
              />
            </div>
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
            <button onClick={() => closeModal(false)} id="cancelBtn">
              Cancel
            </button>
            <button onClick={onSubmit}>Save</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
