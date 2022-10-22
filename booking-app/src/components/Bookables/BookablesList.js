import { useState } from "react";
import data  from "../../static.json";

export default function BookablesList() {
  const [bookableClass, setBookableClass] = useState();
  const {bookables} = data;
  const group = "Rooms";
  const bookablesInGroup = bookables.filter(
    (bookable) => bookable.group === group
  );

  const bookableSelectHandler = (index) => {
    setBookableClass(index);
  }

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableClass ? "selected" : null}>
          <button className="btn" onClick={() => {bookableSelectHandler(i)}}>{b.title}</button>
        </li>
      ))}
    </ul>
  );
}
