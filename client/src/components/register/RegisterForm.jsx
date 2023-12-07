import { useState } from "react";
import { registerUser } from "../../api/authApi";
import { setLocalStorage } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerHookFormValidation } from "../../utils/validation";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [errorApi, setErrorApi] = useState([]);
  const navigate = useNavigate();

  async function handleRegister(data) {
    try {
      const { username, email, password } = data;
      const result = await registerUser({
        username,
        email,
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
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1>Register</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          {...register("username", registerHookFormValidation.username)}
        />
        {errors?.username ? (
          <p className="error-message">{errors.username?.message}</p>
        ) : null}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          {...register("email", registerHookFormValidation.email)}
        />
        {errors?.email ? (
          <p className="error-message">{errors.email?.message}</p>
        ) : null}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          {...register("password", registerHookFormValidation.password)}
        />
        {errors?.password ? (
          <p className="error-message">{errors.password?.message}</p>
        ) : null}

        {errorApi.length > 0 &&
          errorApi.map((error) => <p className="error-message">{error}</p>)}

        <button type="submit">Register</button>
      </form>
    </>
  );
}
