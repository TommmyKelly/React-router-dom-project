import { useState, useEffect } from "react";
import axios from "axios";
import Users from "../components/Users";
import "./Home.css";

const Home = ({ users }) => {
  const APP_ID = "609c5dfeafd975ca7953ec96";

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
