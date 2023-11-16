import mernLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <nav>
        <img id="logo" src={mernLogo} className="logo react" alt="React logo" />
        <ul>
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
