import { Oval } from "react-loader-spinner";

function Users({ loading, users }) {
  const theUsers = users.map((user, index) => {
    return (
      <li className="user-card" key={index}>
        <div className="user-card-header">
          <img src={`${user.picture.medium}`} alt="user-img" />
        </div>
        <div className="user-card-body">
          <p className="user-card__name">{`${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
          <p className="user-card__email">{user.email}</p>
          <div className="user-card__genage">
            <span>{user.gender}</span>
            <span>{user.dob.age}</span>
          </div>
          <p className="user-card__location">{`${user.location.country} (${user.nat})`}</p>
        </div>
      </li>
    );
  });

  if (loading) {
    return (
      <>
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={5}
          color="blue"
          secondaryColor="white"
        />
      </>
    );
  } else {
    return (
      <>
        <section className="users">
          <ul className="card-grid">{theUsers}</ul>
        </section>
      </>
    );
  }
}

export default Users;
