import { useState } from "react";
import { useForm } from "react-hook-form";
import { createTaskHookFormValidation } from "../utils/validation";

export default function CreateTaskDialog(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const { toggleDialog, createNewTask } = props;

  const [errorApi, setErrorApi] = useState([]);

  async function handleCreateTask(data) {
    try {
      const { title, description, date } = data;
      const task = {
        title,
        description,
        date,
        status: "Pending",
      };
      await createNewTask(task);
      toggleDialog("createDialog");
      setVisible();
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    }
  }

  return (
    <div className="dialog">
      <form className="dialog-form" onSubmit={handleSubmit(handleCreateTask)}>
        <h1>Create New Task</h1>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          {...register("title", createTaskHookFormValidation.title)}
        />

        <p className="error-message">{errors?.title && errors.title.message}</p>

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" {...register("description")} />

        <p className="error-message">
          {errors?.description && errors.description.message}
        </p>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          {...register("date", createTaskHookFormValidation.date)}
        />

        <p className="error-message">{errors?.date && errors.date.message}</p>

        {errorApi.length > 0 &&
          errorApi.map((error) => <p className="error-message">{error}</p>)}

        <span className="flex">
          <button type="button" onClick={() => toggleDialog("createDialog")}>
            Cancel
          </button>
          <button type="submit">Create</button>
        </span>
      </form>
    </div>
  );
}
