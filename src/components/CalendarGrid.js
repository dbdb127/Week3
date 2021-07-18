import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EditModal from './EditModal';
import './Modal.css';
import { useQuery } from 'react-query';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);
const now = new Date();

const CalendarGrid = ({ index }) => {
  now.setMonth(index);
  const [openModal, setOpenModal] = useState(false);

  //db에서 월별 data 가져오기
  // const tmp = index + 1;
  // const url =
  //   'http://172.10.18.176/transaction/historyByCategory?year=2021&month=' + tmp;

  // const { isLoading, error, data } = useQuery('monthData', async () => {
  //   try {
  //     const res = await axios.get(url, {
  //       headers: {
  //         authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNjU4NDc0NX0.b8y9ylrQoV1YQjV1ESbqV5x1oEV58V6WtCpqywsp7XI',
  //       },
  //     });
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error(error);
  //   }
  // });

  const [history, setHistory] = useState([
    {
      title: '출근',
      allDay: false,
      start: new Date(2021, 6, 16, 10, 0),
      end: new Date(2021, 6, 16, 10, 30),
    },
    {
      title: '퇴근',
      allDay: false,
      start: new Date(2021, 6, 16, 10, 0),
      end: new Date(2021, 6, 16, 10, 30),
    },
  ]);

  // useEffect(() => {
  //   axios.post().then((response) => {
  //     setHistory();
  //   });
  // });

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
      {openModal && <EditModal closeModal={setOpenModal} scrollable={true} />}
      <Calendar
        toolbar={Boolean(false)}
        localizer={localizer}
        events={history}
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
