import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>Edit</h1>
        </div>
        <div className="body">
          <p>수입/지출</p>
          <p>날짜</p>
          <p>날짜</p>
          <p>Label</p>
          <p>금액</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
