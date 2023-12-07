import { useState } from "react";

function DeleteTaskDialog(props) {
  const { deleteTask, idTaskToDelete, toggleDialog } = props;
  const [errorApi, setErrorApi] = useState([]);

  async function handleDeleteTask() {
    try {
      await deleteTask(idTaskToDelete);
      toggleDialog("deleteDialog");
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    }
  }

  return (
    <div className="dialog">
      <form className="dialog-form delete-task-container">
        <h1>Delete Task</h1>
        <p>Are you sure you want to delete this task?</p>
        {errorApi.length > 0 && errorApi.map((error) => <p>{error}</p>)}
        <span className="flex task-btn-wrapper">
          <button
            className="red-bg"
            type="button"
            onClick={() => toggleDialog("deleteDialog")}
          >
            Cancel
          </button>
          <button className="green-bg" type="button" onClick={handleDeleteTask}>
            Delete
          </button>
        </span>
      </form>
    </div>
  );
}

export default DeleteTaskDialog;
