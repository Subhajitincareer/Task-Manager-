import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import locales from "./local.js"
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [
  {
    title: 'Meeting',
    start: new Date(2023, 10, 20, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
    end: new Date(2023, 10, 20, 12, 0),
  },
  {
    title: 'Birthday Party',
    start: new Date(2023, 10, 22, 19, 0),
    end: new Date(2023, 10, 22, 22, 0),
  },
];
const CalendarPage = () => {
  return (
    <div className=
    'w-[100%] h-full bg-amber-400'><Calendar
      localizer={localizer}
      style={{height:"600", width:"100%"}}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      views={['month', 'week', 'day']}
      defaultView="month"
      selectable={true}
     
    /></div>
    
  
  )
}

export default CalendarPage
