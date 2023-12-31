import mernLogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { clearLocalStorage, isAuthenticated } from "../../utils/auth";

function NavigationBar() {
  const navigate = useNavigate();

  function logout() {
    clearLocalStorage();
    navigate("/login", { replace: true });
  }

  function getUsername() {
    return localStorage.getItem("username");
  }

  return (
    <>
      <nav>
        <img id="logo" src={mernLogo} className="logo react" alt="React logo" />
        <ul>
          {!isAuthenticated() ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <p>Hello, {getUsername()}</p>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
