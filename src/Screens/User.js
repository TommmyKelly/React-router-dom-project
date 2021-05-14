import axios from "axios";
import { useEffect, useState } from "react";
import { getDate, getLink } from "../utils";
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
  }, []);

  return (
    <>
      {loading === false ? (
        <div className='user__container'>
          <div class='user__left'>
            <img src={user.picture} alt='' />
          </div>
          <div className='user__middle'>
            <h3>First Name: {user.firstName}</h3>
            <h3>Last Name: {user.lastName}</h3>
            <h5>DOB: {getDate(user.dateOfBirth)}</h5>
          </div>

          <div class='mapouter user__right'>
            <h3>{user.location.city}</h3>
            <h3>{user.location.city}</h3>
            <h3>{user.location.city}</h3>
            <div class='gmap_canvas'>
              <iframe
                style={{ width: "100%", height: 250 }}
                id='gmap_canvas'
                src={`https://maps.google.com/maps?q=${getLink(
                  user.location.city
                )},%20${
                  user.location.country
                }&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                frameborder='-4'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                zoom='10%'
              />
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default User;
