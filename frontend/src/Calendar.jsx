import React, { useMemo, useState } from "react";
import "./calendar.css";

function buildMonth(year, month) {

  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const firstWeekday = first.getDay();
  const days = last.getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
  return cells;
}

function Calendar() {
  const today = new Date();
  const [display, setDisplay] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const cells = useMemo(
    () => buildMonth(display.year, display.month),
    [display.year, display.month]
  );

  const monthLabel = new Date(display.year, display.month).toLocaleString(
    undefined,
    { month: "long", year: "numeric" }
  );

  const isToday = (d) =>
    d &&
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate();

  const prevMonth = () => {
    setDisplay((p) => {
      const m = p.month - 1;
      return m < 0
        ? { year: p.year - 1, month: 11 }
        : { year: p.year, month: m };
    });
  };
  const nextMonth = () => {
    setDisplay((p) => {
      const m = p.month + 1;
      return m > 11
        ? { year: p.year + 1, month: 0 }
        : { year: p.year, month: m };
    });
  };

  return (
    <div className="to-do-list" role="region" aria-label="Calendar">
      <h1>{monthLabel}</h1>
      <div className="calendar-controls">
        <button
          className="move-button"
          onClick={prevMonth}
          aria-label="Previous month"
        >
          ◀ Prev
        </button>
        <button
          className="move-button"
          onClick={nextMonth}
          aria-label="Next month"
        >
          Next ▶
        </button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="dow">
            {d}
          </div>
        ))}
        {cells.map((d, idx) => (
          <div
            key={idx}
            className={
              "day" + (d ? "" : " filler") + (isToday(d) ? " today" : "")
            }
          >
            {d ? d.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
