import { useState } from "react";

function UpdateTaskDialog(props) {
  const {
    setUpdateTaskDialogVisible,
    updateTask,
    task: { _id, title, description, date, status },
  } = props;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedStatus, setUpdatedStatus] = useState(status);

  function handleTitle(e) {
    setUpdatedTitle(e.target.value);
  }

  function handleDescription(e) {
    setUpdatedDescription(e.target.value);
  }

  function handleDate(e) {
    setUpdatedDate(e.target.value);
  }

  function handleStatus(e) {
    setUpdatedStatus(e.target.value);
  }

  function handleUpdateTask(e) {
    e.preventDefault();
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      date: updatedDate,
      status: updatedStatus,
    };
    updateTask(updatedTask);
    setUpdateTaskDialogVisible();
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
          value={updatedTitle}
          onChange={handleTitle}
          type="text"
          id="title"
          name="title"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <label htmlFor="description">Description:</label>
        <input
          value={updatedDescription}
          onChange={handleDescription}
          type="text"
          id="description"
          name="description"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <label htmlFor="date">Date:</label>
        <input
          value={updatedDate}
          onChange={handleDate}
          type="date"
          id="date"
          name="date"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br></br>

        <label htmlFor="status">Status:</label>
        <input
          value={updatedStatus}
          onChange={handleStatus}
          type="text"
          id="status"
          name="status"
          required
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            boxSizing: "border-box",
          }}
        />

        <br />

        <span>
          <button type="button" onClick={setUpdateTaskDialogVisible}>
            Cancel
          </button>
          <button type="button" onClick={handleUpdateTask}>
            Update
          </button>
        </span>
      </form>
    </div>
  );
}

export default UpdateTaskDialog;
