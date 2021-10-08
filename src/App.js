import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./Screens/Home";
import User from "./Screens/User";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import About from "./Screens/About";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_API_KEY;
    axios.defaults.headers.common["app-id"] = APP_ID;
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/user");

      setUsers(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Home
                  {...props}
                  users={users}
                  setLoading={setLoading}
                  loading={loading}
                />
              )}
            />
            <Route path='/user/:id' component={User} />
            <Route path='/about' component={About} />
            <Route path='' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
