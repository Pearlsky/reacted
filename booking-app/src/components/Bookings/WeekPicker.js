import { useRef } from "react";
import {
  FaChevronLeft,
  FaCalendarDay,
  FaCalendarCheck,
  FaChevronRight,
} from "react-icons/fa";

export default function WeekPicker({ dispatch }) {
  // tracking input value perchange using state
  // const [dateText, setDateText] = useState("");
  const dateTextboxRef = useRef();

  const goToDate = () => {
    dispatch({
      type: "SET_DATE",

      // payload for uncontrolled input
      payload: dateTextboxRef.current.value,

      // payload for controlled input
      // payload: dateText
    });
  };

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
        <span>
          <input
            type="text"
            ref={dateTextboxRef}
            placeholder="e.g. 2020-09-02"
            defaultValue="2020-06-24"
            // onChange={(e) => {setDateText(e.target.value)}}
          />
          <button className="go btn" onClick={goToDate}>
            <FaCalendarCheck />
            <span>Go</span>
          </button>
        </span>

        <button className="btn" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
          <span>Next</span>
          <FaChevronRight />
        </button>
      </p>
    </div>
  );
}
