import Users from "../components/Users";
import "./Home.css";

const Home = ({ users }) => {
  return (
    <>
      <div className='home__wrapper'>
        {users?.map((user) => (
          <Users key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Home;
