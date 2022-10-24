import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import UsersLists from "./UsersList";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);

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
    <main className="main">
      <UsersLists loading={loading} users={currentUsers} />
      <Pagination
        users={users}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}

export default Users;