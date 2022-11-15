import { getWeek } from "../../utils/date-wrangler";

export default function WeekReducer (state, action) {
    switch(action.type) {
        case "PREV_WEEK" : 
            return getWeek(state.date, -7);
        case "NEXT_WEEK" : 
            return getWeek(state.date, 7);
        case "TODAY" : 
            return getWeek(new Date());
        case "SET_DATE" : 
            return getWeek(new Date(action.payload));
        default : 
            return `No know action as ${action.type}`;
    }
}