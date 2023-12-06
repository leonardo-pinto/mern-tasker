import { useState } from "react";
import { register } from "../api/authApi";
import { setLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await register({
        username: userName,
        email,
        password,
      });

      navigate("/", { replace: true });
      setLocalStorage(result);
    } catch (error) {
      console.error(`Error while register user: ${JSON.stringify(error)}`);
    }
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <form onClick={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="username">Username:</label>
        <input
          value={userName}
          onChange={handleUserName}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          id="password"
          name="password"
        />
        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
