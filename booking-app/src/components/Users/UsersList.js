import { Fragment, useState } from "react";
import data from "../../static.json";

export default function UsersList() {
  const [userIndex, setUserIndex] = useState(0);
  const userSelectHandler = (index) => {
    setUserIndex(index);
  };
  const { users } = data;

  const user = users[userIndex];

  return (
    <Fragment>
      <div>
        <ul className="users items-list-nav">
          {users.map((b, i) => (
            <li key={b.id} className={i === userIndex ? "selected" : null}>
              <button
                className="btn"
                onClick={() => {
                  userSelectHandler(i);
                }}
              >
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {user && (
        <div className="user-details">
          <div className="item">
            <div className="item-header">
              <h2>{user.name}</h2>
            </div>
            <div className="item-details">
              <h3>{user.title}</h3>
              <div>
                <p>{user.notes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
