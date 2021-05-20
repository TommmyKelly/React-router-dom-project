import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();

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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
