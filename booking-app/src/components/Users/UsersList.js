import { Fragment, useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState(null);
  const [userIndex, setUserIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then(data => {setUsers(data)})
    .catch((err) => {throw new Error(`An ${err.type} just occured: ${err.message}`)})
  }, []);

  const userSelectHandler = (index) => {
    setUserIndex(index);
  };
  const user = users && users[userIndex];

  if (users === null) {
    return <h1>Loading...</h1>
  }

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
