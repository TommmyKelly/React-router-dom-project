import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./Screens/Home";
import User from "./Screens/User";

function App() {
  const [users, setUsers] = useState([]);
  const APP_ID = "609c5dfeafd975ca7953ec96";

  axios.defaults.headers.common["app-id"] = APP_ID;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/api/user");

      console.log(res.data.data);

      setUsers(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Home {...props} users={users} />}
            />
            <Route path='/user/:id' component={User} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
