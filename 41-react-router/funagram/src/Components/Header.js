import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from 'react-router-dom';

library.add(faBars);

const Header = () => {
  return (
    <div className="header">
      <span> Funagram </span>
      <div>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/new_post'> Add New Post </NavLink>
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/signup'> Signup </NavLink>
      </div>
    </div>
  )
}

export default Header;
