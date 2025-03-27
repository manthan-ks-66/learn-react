import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;
  return (
    <UserContext>
      <div>
        <h2>Profile</h2>
        <p>Username:{user.username} </p>
        <p>Password: {user.password}</p>
      </div>
    </UserContext>
  );
}

export default Profile;
