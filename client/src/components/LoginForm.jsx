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
      <form onSubmit={handleSubmit(handleRegistration)}>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>

        <input
          type="text"
          name="username"
          {...register("userName", loginOptions.userName)}
        />
        <p>{errors?.userName && errors.userName.message}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          {...register("password", loginOptions.password)}
        />
        <p>{errors?.password && errors.password.message}</p>

        <button>Login</button>
      </form>
    </>
  );
}
export default LoginForm;
