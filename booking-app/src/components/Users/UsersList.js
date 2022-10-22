import { useState } from "react";
import data from "../../static.json";

export default function UsersList() {
  const [userClass, setUserClass] = useState();
  const userSelectHandler = (index) => {
    setUserClass(index);
  };
  const { users } = data;

  return (
    <ul className="users items-list-nav">
      {users.map((b, i) => (
        <li key={b.id} className={i === userClass ? "selected" : null}>
          <button
            className="btn"
            onClick={() => {
              userSelectHandler(i);
            }}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
