import { useState, useEffect, useContext } from "react";
import Spinner from "../UI/Spinner";
import UserContext from "./UserContext";

export default function UserPicker() {
  const [users, setUsers] = useState(null);
  const {user , setUser} = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setUser(data[0]);
      })
      .catch((err) => {
        throw new Error(`This ${err.type} error just occured: ${err.message}`);
      });
  }, [setUser]);

  if (users === null) {
    return <Spinner/>;
  }

  function handleSelect(e) {
    // because the radix representing the base does not always default to 10
    const selectedID = parseInt(e.target.value, 10);
    const selectedUser = users.find((u) => u.id === selectedID);
    setUser(selectedUser);
  }

  return (
    <select className="user-picker" onChange={handleSelect} value={user?.id}>
      {users.map((u, i) => (
        <option key={u.id} value={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
