import { useState } from "react";

function CreateTaskDialog(props) {
  const { setVisible, createNewTask } = props;

  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
    status: "Pending",
  });

  function handleValues(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateNewTask();
    setVisible();
  }

  function handleCreateNewTask() {
    createNewTask(values);
  }

  return (
    <div className="dialog">
      <form className="dialog-form">
        <h1>Create New Task</h1>
        <label htmlFor="title">Title:</label>
        <input
          value={values.title}
          onChange={handleValues}
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="description">Description:</label>
        <input
          value={values.description}
          onChange={handleValues}
          type="text"
          id="description"
          name="description"
        />

        <label htmlFor="date">Date:</label>
        <input
          value={values.date}
          onChange={handleValues}
          type="date"
          id="date"
          name="date"
        />

        <span className="flex">
          <button type="button" onClick={setVisible}>
            Cancel
          </button>
          <button type="button" onClick={handleSubmit} style={{}}>
            Create
          </button>
        </span>
      </form>
    </div>
  );
}

export default CreateTaskDialog;
