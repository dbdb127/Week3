import React, { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const now = new Date();

const CalendarGrid = (props) => {
    return(
        <div style={{height: 700, padding:40}}>
        <Calendar
          localizer = {localizer}
          events={[
              {
                  title: "출근",
                  allDay: false,
                  start: new Date(2021, 6, 16, 10, 0),
                  end:new Date(2021, 6, 16, 10, 30)
              }
          ]}
          step={60}
          navigate={["TODAY"]}
          views={["month"]}   //view only month
          defaultDate = {new Date()}
          />
      </div>
    );
}

export default CalendarGrid;