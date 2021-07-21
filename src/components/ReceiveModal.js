import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ReceiveModal.css';
import Receive from '../query/Receive';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

let type = '';

const ReceiveModal = ({ pendingData, setIsPending }) => {
  const [sendReply, setSendReply] = useState(false);

  const onReceive = () => {
    type = 'RECEIVE';
    setSendReply(true);
  };

  const onDeny = () => {
    type = 'DENY';
    setSendReply(true);
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="receiveModalBackground"
          variants={modalBackground}
          initial="hidden"
          animate="visible"
        >
          <div className="receiveModalContainer">
            <div className="header">
              <div className="title">
                <h2>Receive or not?</h2>
              </div>
            </div>
            <div className="body">
              <div className="element">
                <div>
                  <div>From: {pendingData.accountSubId}</div>
                  <div>Content: {pendingData.content}</div>
                  <div>Amount: {pendingData.amount}</div>
                  <div>Date: {pendingData.createdAt.slice(0, 10)}</div>
                </div>
                <button onClick={onReceive}>receive</button>
                <button onClick={onDeny}>deny</button>
              </div>
            </div>
          </div>
          
          {sendReply && (
            <Receive
              type={type}
              setSendReply={setSendReply}
              transactionId={pendingData.id}
              setIsPending={setIsPending}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ReceiveModal;
