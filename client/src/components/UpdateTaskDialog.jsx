import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateTaskHookFormValidation } from "../utils/validation";

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
      await updateTask(updatedTask);
      toggleDialog("updateDialog");
      setUpdateTaskDialogVisible();
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        direction: "row",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        zIndex: "100",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <form
        onSubmit={handleSubmit(handleUpdateTask)}
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "20px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <h1>Update Task</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
          {...register("title", updateTaskHookFormValidation.title)}
        />
        {errors?.title && errors.title.message}

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
          {...register("description")}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
          {...register("date", updateTaskHookFormValidation.date)}
        />
        <p className="error-message">{errors?.date && errors.date.message}</p>

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          name="status"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
          {...register("status", updateTaskHookFormValidation.status)}
        />
        <p className="error-message">
          {errors?.status && errors.status.message}
        </p>
        <br />
        {errorApi.length > 0 &&
          errorApi.map((error) => <p className="error-message">{error}</p>)}

        <span>
          <button type="button" onClick={() => toggleDialog("updateDialog")}>
            Cancel
          </button>
          <button type="submit">Update</button>
        </span>
      </form>
    </div>
  );
}
