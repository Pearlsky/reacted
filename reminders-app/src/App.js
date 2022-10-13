import { useState } from "react";
import InputForm from "./components/InputForm";
import FilterSelect from "./components/FilterSelect";
import RemindersList from "./components/RemindersList";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [reminders, setReminders] = useState([]);

  const addNewReminder = (itemToAdd) => {
    setReminders([...reminders, itemToAdd])
  };

  return (
    <div>
      <InputForm userInput={userInput} setUserInput={setUserInput} addNewReminder={addNewReminder}/>
      <FilterSelect/>
      <RemindersList/>
    </div>
  );
}
