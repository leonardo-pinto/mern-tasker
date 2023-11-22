import { useState } from "react";
import { login } from "../api/authApi";
import { setLocalStorage } from "../utils";
function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserName(e) {
    const { value } = e.target;
    setUserName(value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await login({
        username: userName,
        password,
      });

      setLocalStorage(result);
    } catch (error) {
      console.error(`Error while login user: ${JSON.stringify(error)}`);
    }
  }
  return (
    <>
      <form
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          value={userName}
          onChange={handleUserName}
          type="text"
          id="username"
          name="username"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          id="password"
          name="password"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <input
          onClick={handleSubmit}
          type="submit"
          value="Login"
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </form>
    </>
  );
}

export default LoginForm;
