import { useState, useEffect } from "react";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then((data) => {setUsers(data)})
    .catch((err) => {throw new Error(`This ${err.type} error just occured: ${err.message}`)});
  }, []);

  if(users === null) {
    return <h1>Loading...</h1>
  }

  return (
    <select>
      {users.map((user, i) => 
        <option key={user.id}>{user.name}</option>
      )}
    </select>
  );
}
