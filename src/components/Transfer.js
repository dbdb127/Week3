import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Transfer.css';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Transfer = ({ openTransfer, setOpenTransfer, setOpenCardList }) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="modalBackground"
          variants={modalBackground}
          initial="hidden"
          animate="visible"
        >
          <div className="transferModalBackground">
            <div className="transferModalContainer"></div>
          </div>
        </motion.div>
      </AnimatePresence>
      {setOpenCardList(false)}
    </div>
  );
};

export default Transfer;
