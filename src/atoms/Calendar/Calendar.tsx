import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/timegrid/main.css';
import './calendar.css';

const Calendar: React.FC = () => {
  const start = new Date();
  const end = new Date();
  end.setHours(end.getHours() + 1);
  return (
    <FullCalendar
      defaultView="timeGridWeek"
      plugins={[timeGridPlugin]}
      events={[{ title: 'Test', start, end, color: 'red' }]}
      minTime="07:00:00"
      allDaySlot={false}
    />
  );
};

export default Calendar;
