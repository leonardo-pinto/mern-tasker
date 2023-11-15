import { useState } from "react";

function CreateTaskDialog(props) {
  const { setVisible, createNewTask } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateNewTask();
    setVisible();
  }

  function handleCreateNewTask() {
    const task = {
      title,
      description,
      date,
      status: "Pending",
    };
    createNewTask(task);
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
        <h1>Create New Task</h1>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
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
          value={description}
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
          value={date}
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

        <br />

        <span>
          <button onClick={setVisible}>Cancel</button>
          <button onClick={handleSubmit} style={{}}>
            Create
          </button>
        </span>
      </form>
    </div>
  );
}

export default CreateTaskDialog;
