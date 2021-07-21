import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EditModal from './EditModal';
import './Modal.css';
import GetMonthHistory from '../query/GetMonthHistory';
import { faBold } from '@fortawesome/free-solid-svg-icons';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);
const now = new Date();

const CalendarGrid = ({ index, income, setIncome, outcome, setOutcome }) => {
  now.setMonth(index);
  const [openModal, setOpenModal] = useState(false);
  const [history, setHistory] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [clickEvent, setClickEvent] = useState('');

  const popUp = (event) => {
    setClickEvent(event);
    setOpenModal(true);
  };

  const eventStyleGetter = (event) => {
    if (event.title.slice(0, 1) === '-') {
      var style = {
        backgroundColor: 'transparent',
        color: 'crimson',
        fontWeight: 700,
        // paddingLeft: '10px',
        textAlign: 'right',
        paddingRight: '10px',
      };
    } else {
      var style = {
        backgroundColor: 'transparent',
        color: 'royalblue',
        fontWeight: 700,
        // paddingLeft: '10px',
        // textAlign: 'right',
        // paddingRight: '10px',
      };
    }
    return {
      style: style,
    };
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
        income={income}
        setIncome={setIncome}
        outcome={outcome}
        setOutcome={setOutcome}
      />
      {openModal && (
        <EditModal
          setOpenModal={setOpenModal}
          monthData={monthData}
          clickEvent={clickEvent}
        />
      )}
      <Calendar
        toolbar={Boolean(false)}
        localizer={localizer}
        events={history}
        step={60}
        views={['month']} //view only month
        defaultDate={now}
        onSelectEvent={(event) => popUp(event)}
        eventPropGetter={eventStyleGetter}
        showAllEvents={Boolean(true)}
        doShowMoreDrillDown={Boolean(true)}
      />
    </div>
  );
};

export default CalendarGrid;
