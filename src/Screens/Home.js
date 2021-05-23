import { useEffect } from "react";
import Spinner from "../components/Spinner";
import Users from "../components/Users";
import "./Home.css";

const Home = ({ users, setLoading, loading }) => {
  useEffect(() => {
    users.length > 0 && setLoading(false);
    // eslint-disable-next-line
  }, [users]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='home__wrapper'>
          {users?.map((user) => (
            <Users key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
