import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EditModal from './EditModal';
import './Modal.css';
import { useQuery } from 'react-query';
import GetMonthHistory from '../query/GetMonthHistory';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);
const now = new Date();

const CalendarGrid = ({ index }) => {
  now.setMonth(index);
  const [openModal, setOpenModal] = useState(false);
  const [history, setHistory] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [clickEvent, setClickEvent] = useState('');

  const popUp = (event) => {
    setClickEvent(event);
    setOpenModal(true);
  };

  return (
    <div
      style={{
        height: 700,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 40,
        paddingBottom: 100,
      }}
    >
      <GetMonthHistory
        index={index}
        setHistory={setHistory}
        setMonthData={setMonthData}
      />
      {openModal && (
        <EditModal
          closeModal={setOpenModal}
          monthData={monthData}
          clickEvent={clickEvent}
          scrollable={true}
        />
      )}
      <Calendar
        toolbar={Boolean(false)}
        localizer={localizer}
        events={history}
        step={60}
        navigate={['TODAY']}
        views={['month']} //view only month
        defaultDate={now}
        onSelectEvent={(event) => popUp(event)}
        // onDoubleClickEvent={popUp}
      />
    </div>
  );
};

export default CalendarGrid;
