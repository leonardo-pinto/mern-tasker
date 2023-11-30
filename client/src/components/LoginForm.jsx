import { useState } from "react";
import { login } from "../api/authApi";
import { setLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
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

  const loginOptions = {
    userName: {
      required: "User name is required",
      minLength: {
        value: 6,
        message: "User name must have at least 6 characters",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };

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
          {...register("userName", loginOptions.userName)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "1px 0",
            boxSizing: "border-box",
          }}
        />
        <p className="error-message">
          {errors?.userName && errors.userName.message}
        </p>

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          {...register("password", loginOptions.password)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />
        <p>{errors?.password && errors.password.message}</p>

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
