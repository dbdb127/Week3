import React, { useState, useEffect } from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';
import CardSlider from './CardSlider';
import GetAllAccount from '../query/GetAllAccount';
import GetAllCategories from '../query/GetAllCategories';
import UpdateOne from '../query/UpdateOne';
import DeleteOne from '../query/DeleteOne';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const style = {
  background: '#333333',
  color: 'white',
};

const EditModal = ({ setOpenModal, monthData, clickEvent }) => {
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

  const [accountId, setAccountId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [sendEdit, setSendEdit] = useState(false);
  const [sendDelete, setSendDelete] = useState(false);

  useEffect(() => {
    monthData.map((el) => {
      if (el.id === clickEvent.index) {
        //income or expenditure 설정
        if (el.type === 'INCOME') {
          incomeCategory();
        } else {
          outcomeCategory();
        }

        //date 설정
        setDate(el.createdAt.slice(0, 10));

        //category 설정
        getAllCategoriesData?.map((element) => {
          if (el.categoryId === element.id) {
            setCategory(element.name);
            setCategoryId(el.categoryId);
          }
        });

        //account 설정 수정
        getAllAccountData?.map((element, i) => {
          if (el.accountId === element.id) {
            setAccount(element.name);
            setAccountId(i);
          }
        });

        //label, amount 설정
        setLabel(el.content);
        setAmount(el.amount);
      }
    });
  }, [
    ,
    clickEvent,
    incomeCategoryList,
    outcomeCategoryList,
    getAllCategoriesData,
    getAllAccountData,
  ]);

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

  const onSubmitAdd = (event) => {
    if (!validateForm()) {
      return;
    }

    //accountId 구하기
    getAllAccountData.map((el) => {
      if (el.name === account) {
        setAccountId(el.id);
      }
    });

    //categoryId 구하기
    getAllCategoriesData.map((el) => {
      if (el.name === category) {
        setCategoryId(el.id);
      }
    });

    setSendEdit(true);
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
              <button onClick={() => setOpenModal(false)}>X</button>
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
                accountId={accountId}
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
            <button onClick={() => setSendDelete(true)} id="cancelBtn">
              Remove
            </button>
            <button onClick={onSubmitAdd}>Save</button>
            {sendEdit ? (
              <UpdateOne
                clickEvent={clickEvent}
                label={label}
                amount={amount}
                categoryId={categoryId}
                date={date}
                accountId={accountId}
                setSendEdit={setSendEdit}
                setOpenModal={setOpenModal}
              />
            ) : null}
            {sendDelete ? (
              <DeleteOne
                clickEvent={clickEvent}
                setSendDelete={setSendDelete}
                setOpenModal={setOpenModal}
              />
            ) : null}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditModal;
