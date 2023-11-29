import { useState } from "react";
import { login } from "../api/authApi";
import { setLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleRegistration(data) {
    try {
      const { userName, password } = data;
      const result = await login({
        username: userName,
        password,
      });

      navigate("/", { replace: true });
      setLocalStorage(result);
    } catch (error) {
      console.error(`Error while login user: ${JSON.stringify(error)}`);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegistration)}
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
          type="text"
          name="username"
          {...register("userName")}
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
          type="text"
          name="password"
          {...register("password")}
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <button
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
