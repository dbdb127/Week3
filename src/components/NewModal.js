import React, { useState } from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';
import CardSlider from './CardSlider';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import GetAllAccount from '../query/GetAllAccount';
import GetAllCategories from '../query/GetAllCategories';
import IncomeTransaction from '../query/IncomeTransaction';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const style = {
  background: '#333333',
  color: 'white',
};

const NewModal = ({ closeModal }) => {
  //data 담아놓을 cache
  const [getAllAccountData, setGetAllAccountData] = useState([]);
  const [getAllCategoriesData, setGetAllCategoriesData] = useState([]);

  //변수 지정
  const [incomeSelect, setIncomeSelect] = useState(true);
  const [outcomeSelect, setOutcomeSelect] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [incomeCategoryList, setIncomeCategoryList] = useState([]);
  const [outcomeCategoryList, setOutcomeCategoryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('');
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState('');
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [sendIncome, setSendIncome] = useState(false);

  let accountId = 0;
  let categoryId = 0;

  const incomeCategory = () => {
    setIncomeSelect(true);
    setOutcomeSelect(false);
    setCategory('');
    setCategoryList(incomeCategoryList);
  };

  const outcomeCategory = () => {
    setIncomeSelect(false);
    setOutcomeSelect(true);
    setCategory('');
    setCategoryList(outcomeCategoryList);
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

  // const SendIncome = () => {
  //   const accountUrl = 'http://172.10.18.176/transaction/income/:' + accountId;
  //   console.log('accountUrl', accountUrl);
  //   const { isLoading, error, data } = useQuery('sendIncome', async () => {
  //     const response = await axios.post(accountUrl, {
  //       headers: {
  //         authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNjQzMTMyMH0.cLTUcksV0DtJ1-WUuPVDpQdqsDe436AKxx_tsehiVW8',
  //       },
  //       body: {
  //         amount: amount,
  //         categoryId: categoryId,
  //         content: label,
  //         data: date,
  //       },
  //     });
  //     console.log(data);
  //     return response.data.data;
  //   });
  // };

  const onSubmit = (event) => {
    if (!validateForm()) {
      return;
    }

    //accountId 구하기
    getAllAccountData.map((el) => {
      if (el.name === account) {
        accountId = el.id;
      }
    });

    //categoryId 구하기
    getAllCategoriesData.map((el) => {
      if (el.name === category) {
        categoryId = el.id;
      }
    });

    if (incomeSelect) {
      setSendIncome(true);
    } else {
    }

    // console.log('incomeSelect', incomeSelect);
    // console.log('outcomSelect', outcomeSelect);
    // console.log('date', date);
    // console.log('category', category);
    // console.log('account', account);
    // console.log('label', label);
    // console.log('amount', amount);

    // closeModal(false);
  };

  return (
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

        <GetAllCategories
          setIncomeCategoryList={setIncomeCategoryList}
          setOutcomeCategoryList={setOutcomeCategoryList}
          setCategoryList={setCategoryList}
          setGetAllCategoriesData={setGetAllCategoriesData}
        />

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
                    onClick={() => setCategory(el)}
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
                setAccount={setAccount}
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
            {console.log('1', sendIncome)}
            {sendIncome ? (
              <IncomeTransaction
                accountId={accountId}
                amount={amount}
                categoryId={categoryId}
                label={label}
                date={date}
                sendIncome={sendIncome}
              />
            ) : null}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewModal;