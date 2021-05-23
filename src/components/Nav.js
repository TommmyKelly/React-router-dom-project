import "./Nav.css";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const history = useHistory();

  const backButton = () => {
    if (
      location.pathname.substring(0, 5) === "/user" ||
      location.pathname.substring(0, 6) === "/about"
    ) {
      return (
        <span>
          {" | "}
          <Link onClick={() => history.goBack()} to='#'>
            Back
          </Link>
        </span>
      );
    }
  };

  return (
    <nav
      style={
        location.pathname.substring(0, 5) === "/user"
          ? {
              backgroundColor: "khaki",
            }
          : null
      }
    >
      <div className='container flex'>
        <div className='nav__left'>
          <Link to='/'>Home</Link>
        </div>
        <div className='right'>
          <Link to='/about'>About</Link>
          {backButton()}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
