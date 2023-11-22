import mernLogo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../utils";

function NavigationBar() {
  const navigate = useNavigate();

  function logout() {
    clearLocalStorage();
    navigate("/login", { replace: true });
  }

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
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
