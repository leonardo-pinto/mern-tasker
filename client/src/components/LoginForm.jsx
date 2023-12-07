import { useState } from "react";
import { login } from "../api/authApi";
import { setLocalStorage } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginHookFormValidation } from "../utils/validation/";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [errorApi, setErrorApi] = useState([]);
  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      const { username, password } = data;
      const result = await login({
        username,
        password,
      });

      navigate("/", { replace: true });
      setLocalStorage(result);
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          {...register("username", loginHookFormValidation.username)}
        />
        <p className="error-message">
          {errors?.username && errors.username.message}
        </p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          {...register("password", loginHookFormValidation.password)}
        />
        <p className="error-message">
          {errors?.password && errors.password.message}
        </p>

        {errorApi.length > 0 &&
          errorApi.map((error) => <p className="error-message">{error}</p>)}
        <button type="submit">Login</button>
      </form>
    </>
  );
}
