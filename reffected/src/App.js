import { useState, useEffect } from "react";
import "./App.css";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);

    const fetchUsers = () => {
      fetch(
        "https://randomuser.me/api/?results=100&inc=gender,name,nat,location,email,dob,picture,id&noinfo"
      )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
          setLoading(false);
        })
        .catch(() => {
          throw new Error();
        });
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


  return (
    <div className="container">
      <main className="main">
        <Users loading={loading} users={currentUsers}/>
        <Pagination users={users} usersPerPage={usersPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </main>
    </div>
  );
}

export default App;