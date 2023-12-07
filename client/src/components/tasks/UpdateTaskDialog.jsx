import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateTaskHookFormValidation } from "../../utils/validation";
import TheLoader from "../common/TheLoader";

export default function UpdateTaskDialog(props) {
  const { toggleDialog, updateTask, task } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: task.title,
      description: task.description,
      date: task.date,
      status: task.status,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState([]);

  async function handleUpdateTask(data) {
    const { title, description, date, status } = data;
    try {
      const updatedTask = {
        title,
        description,
        date,
        status,
      };
      setIsLoading(true);
      await updateTask(updatedTask);
      toggleDialog("updateDialog");
      setUpdateTaskDialogVisible();
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="dialog">
      <form onSubmit={handleSubmit(handleUpdateTask)} className="dialog-form">
        <h1>Update Task</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          {...register("title", updateTaskHookFormValidation.title)}
        />
        {errors?.title ? (
          <p className="error-message">{errors.title?.message}</p>
        ) : null}

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" {...register("description")} />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          {...register("date", updateTaskHookFormValidation.date)}
        />
        {errors?.date ? (
          <p className="error-message">{errors.date?.message}</p>
        ) : null}

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          name="status"
          required
          {...register("status", updateTaskHookFormValidation.status)}
        />
        {errors?.status ? (
          <p className="error-message">{errors.status?.message}</p>
        ) : null}
        <br />
        {errorApi.length > 0 &&
          errorApi.map((error) => <p className="error-message">{error}</p>)}

        { isLoading ? <TheLoader /> : <span className="flex task-btn-wrapper">
          <button
            className="red-bg"
            type="button"
            onClick={() => toggleDialog("updateDialog")}
          >
            Cancel
          </button>
          <button className="green-bg" type="submit">
            Update
          </button>
        </span>}
      </form>
    </div>
  );
}
