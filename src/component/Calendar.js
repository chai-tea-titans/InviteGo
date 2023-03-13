import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingDay = firstDayOfMonth.getDay();
  const monthName = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const renderCalendarCells = () => {
    const calendarCells = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const calendarRow = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          calendarRow.push(
            <td key={`${i}-${j}`} className="empty">
              {" "}
            </td>
          );
        } else if (day > daysInMonth) {
          break;
        } else {
          calendarRow.push(
            <td
              key={`${i}-${j}`}
              className={`calendar-cell ${
                day === selectedDate ? "selected" : ""
              }`}
              onClick={() => onDateClick(day)}
            >
              {day}
            </td>
          );
          day++;
        }
      }

      calendarCells.push(<tr key={i}>{calendarRow}</tr>);
    }

    return calendarCells;
  };

  const onPrevButtonClick = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const onNextButtonClick = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={onPrevButtonClick}>{"<"}</button>
        <div className="calendar-month-year">
          {monthName} {year}
        </div>
        <button onClick={onNextButtonClick}>{">"}</button>
      </div>
      <table className="calendar-grid">
        <thead>
          <tr>
            {weekdaysShort.map(weekday => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendarCells()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
