import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faCalendar,
  faChartBar,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import CardList from './CardList';
import Transfer from './Transfer';

const Navbar = () => {
  const [openCardList, setOpenCardList] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavUl className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                >
                  <StyledIcon icon={faClock} size="2x" />
                  {/* Home */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/calendar"
                  activeClassName="active"
                >
                  <StyledIcon icon={faCalendar} size="2x" />
                  {/* Calendar */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/analytics"
                  activeClassName="active"
                >
                  <StyledIcon icon={faChartBar} size="2x" />
                  {/* Analytics */}
                </NavLink>
              </li>
              <StyledSpan />
              <li className="nav-item">
                <Button onClick={() => setOpenCardList(true)}>
                  <StyledIcon icon={faCreditCard} size="2x" />
                  {/* Payment */}
                </Button>
              </li>
            </NavUl>
          </div>
        </div>
      </nav>
      {openCardList && (
        <CardList
          openCardList={openCardList}
          setOpenCardList={setOpenCardList}
          setOpenTransfer={setOpenTransfer}
        />
      )}
      {openTransfer && (
        <Transfer
          openTransfer={openTransfer}
          setOpenTransfer={setOpenTransfer}
          setOpenCardList={setOpenCardList}
        />
      )}
    </>
  );
};

const NavUl = styled.ul`
  position: relative;
  left: 33%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 30px 40px 30px 40px;
`;

const StyledSpan = styled.span`
  margin: 30px 40px 30px 40px;
  border-left: 2px solid gray;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: #808080;
  margin-top: 5px;

  &:hover {
    color: #4b4b4b;
  }
`;

export default Navbar;
