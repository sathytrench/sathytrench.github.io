import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/about'){
    return (
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/about" className="current-page">about</Link>
          <Link to="/work">work</Link>
        </div>
      </div>
    );
  } else if (path === '/work') {
    return (
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/work" className="current-page">work</Link>
        </div>
      </div>
    );
  } else {
    return (
      <></>
    );
  }
};

export default NavBar;