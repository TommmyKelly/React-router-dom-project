import axios from "axios";
import { useEffect, useState } from "react";
import { getDate, getLink } from "../utils";
import Spinner from "../components/Spinner";
import "./User.css";

const User = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/api/user/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading === false ? (
        <div className='user__container'>
          <div className='user__left'>
            <img src={user.picture} alt='' />
          </div>
          <div className='user__middle'>
            <h3>First Name: {user.firstName}</h3>
            <h3>Last Name: {user.lastName}</h3>
            <h4>Phone: {user.phone}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Street: {user.location.street}</h4>
            <h4>City: {user.location.city}</h4>
            <h4>State: {user.location.state}</h4>
            <h4>Country: {user.location.country}</h4>
            <h5>DOB: {getDate(user.dateOfBirth)}</h5>
          </div>

          <div className='mapouter user__right'>
            {/* <h3>{user.location.city}</h3>
            <h3>{user.location.city}</h3>
            <h3>{user.location.city}</h3> */}
            <div className='gmap_canvas'>
              <iframe
                title='map'
                // style={{ width: "100%", height: "100%" }}
                id='gmap_canvas'
                src={`https://maps.google.com/maps?q=${getLink(
                  user.location.city
                )},%20${
                  user.location.country
                }&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                frameBorder='-4'
                scrolling='no'
                marginHeight='0'
                marginWidth='0'
                zoom='10%'
              />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default User;
