import Reminder from "./Reminder";
function RemindersList(props) {
  return (
    <div>
      <Reminder
        reminderText="Pick up Wesley"
        dueDate="2364-01-15"
        isComplete={false}
      />
      <Reminder
        reminderText="Meet with Jean-Luc"
        dueDate="2364-01-29"
        isComplete={false}
      />
      <Reminder
        reminderText="Holodeck time!"
        dueDate="2364-06-01"
        isComplete={false}
      />
    </div>
  );
}

export default RemindersList;