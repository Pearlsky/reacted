import { useState, useReducer } from "react";
import { getWeek } from "../../utils/date-wrangler";

import WeekReducer from "./WeekReducer";
import WeekPicker from "./WeekPicker";
import BookingsGrid from "./BookingsGrid";
import BookingDetails from "./BookingDetails";

export default function Bookings({ bookable }) {
  const [week, dispatch] = useReducer(WeekReducer, new Date(), getWeek);
  const [booking, setBooking] = useState();

    return (
        <div className="bookings">
            <div>
                <WeekPicker dispatch={dispatch}/>
                <BookingsGrid week={week} bookable={bookable} booking={booking} setBooking={setBooking}/>
            </div>

            <BookingDetails booking={booking} bookable={bookable}/>
        </div>
    );
}