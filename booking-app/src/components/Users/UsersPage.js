import { useContext, useState } from "react";

import UsersList from "./UsersList";
import UserDetails from "./UserDetails";
import UserContext from "./UserContext";

// 

export default function UsersPage() {
  const [user] = useState(null);

  // uses context to get the context value of current user;
  const {user: loggedInUser} = useContext(UserContext);
  const currentUser = user || loggedInUser;

  return (
    <main className="users-page">
      {/* passes the user context value to the user list to enable it properly render the active user with its active styles */}
     <UsersList user={currentUser}/>

     {/* passes same user context value to the user details to enable it properly render the details for the same active */}
     <UserDetails user={currentUser}/>
    </main>
  );
}
