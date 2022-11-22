import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";

export default function UsersList({ user, setUser }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        throw new Error(`An ${err.type} just occured: ${err.message}`);
      });
  }, [setUser]);

  if (users === null) {
    return <p><Spinner/> Loading users...</p>;
  }

  return (
    <div>
      <ul className="users items-list-nav">
        {users.map((b) => (
          <li key={b.id} className={b.id === user?.["id"] ? "selected" : null}>
            <button className="btn" onClick={() => setUser(b)}>
              {b.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
