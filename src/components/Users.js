import { Link } from "react-router-dom";
import "./Users.css";

const Users = ({ user }) => {
  return (
    <div className='users__wrapper'>
      <div className='users__inner-wrapper'>
        <img
          style={{ borderRadius: 10, width: "100%" }}
          src={user.picture}
          alt=''
        />
        <div className='users__link'>
          <Link to={`/user/${user.id}`}>{user.firstName} Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
