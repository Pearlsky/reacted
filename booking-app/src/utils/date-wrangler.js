export function addDays(date, addToDays) {
    const cloneDate = new Date(date.getTime());
    cloneDate.setDate(cloneDate.getDate() + addToDays);
  
    return cloneDate;
  }
  
  // get week functionality for either prev, present or next week
  
  export function getWeek(forDate, daysOffset = 0) {
    const date = addDays(forDate, daysOffset);
    const day = date.getDay();
  
    return {
      date,
      start: addDays(date, -day),
      end: addDays(date, 6 - day),
    };
  }