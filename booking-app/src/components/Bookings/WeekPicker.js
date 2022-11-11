import { useReducer } from "react";
import WeekReducer from "./WeekReducer";
import { FaChevronLeft, FaCalendarDay, FaChevronRight } from "react-icons/fa";
import { getWeek } from "../../utils/date-wrangler";

export default function WeekPicker({ date }) {
  const [week, dispatch] = useReducer(WeekReducer, date, getWeek);
  return (
    <div>
      <p className="date-picker">
        <button className="btn" onClick={() => dispatch({ type: "PREV_WEEK" })}>
          <FaChevronLeft />
          <span>Prev</span>
        </button>
        <button className="btn" onClick={() => dispatch({ type: "TODAY" })}>
          <FaCalendarDay />
          <span>Today</span>
        </button>
        <button className="btn" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
          <span>Next</span>
          <FaChevronRight />
        </button>
      </p>
      <p>
        {week.start.toDateString()} - {week.end.toDateString()}
      </p>
    </div>
  );
}
