import data from "../../static.json";

export default function UserPicker() {
  const { users } = data;

  return (
    <select>
      {users.map((user, i) => 
        <option key={user.id}>{user.name}</option>
      )}
    </select>
  );
}
