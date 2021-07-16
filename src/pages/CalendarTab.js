import React, { useState } from 'react';
import SwipeView from '../components/SwipeView';
import CalendarGrid from '../components/CalendarGrid';

const CalendarTab = () => {
    return (
    <>
      <SwipeView/>
      <CalendarGrid index={0}/>
    </>
    );
};

export default CalendarTab;