import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from './Modal';
import './Modal.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const now = new Date();

const CalendarGrid = (props) => {
  now.setMonth(props.index);
  const [openModal, setOpenModal] = useState(false);

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
      {openModal && <Modal closeModal={setOpenModal} />}
      <Calendar
        toolbar={Boolean(false)}
        localizer={localizer}
        events={[
          {
            title: '출근',
            allDay: false,
            start: new Date(2021, 6, 16, 10, 0),
            end: new Date(2021, 6, 16, 10, 30),
          },
        ]}
        step={60}
        navigate={['TODAY']}
        views={['month']} //view only month
        defaultDate={now}
        onSelectEvent={() => setOpenModal(true)}
        // onDoubleClickEvent={popUp}
      />
    </div>
  );
};

export default CalendarGrid;
