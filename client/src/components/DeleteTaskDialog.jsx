import { useState } from "react";

function DeleteTaskDialog(props) {
  const { setDeleteTaskDialogVisible, deleteTask, idTaskToDelete } = props;
  const [errorApi, setErrorApi] = useState([]);

  async function handleDeleteTask() {
    try {
      await deleteTask(idTaskToDelete);
      setDeleteTaskDialogVisible();
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
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "20px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <h1>Delete Task</h1>
        <p>Are you sure you want to delete this task?</p>
        {errorApi.length > 0 && errorApi.map((error) => <p>{error}</p>)}
        <span>
          <button type="button" onClick={setDeleteTaskDialogVisible}>
            Cancel
          </button>
          <button type="button" onClick={handleDeleteTask}>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default DeleteTaskDialog;
