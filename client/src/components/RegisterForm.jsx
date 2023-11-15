import { useState } from "react";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${userName}, Email: ${email}, Password: ${password}`);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
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
        <h1>Register</h1>
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

        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          id="email"
          name="email"
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
          type="submit"
          value="Register"
          onClick={handleSubmit}
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

export default RegisterForm;