import { useState } from "react";

function CreateTaskDialog(props) {
  const { setVisible, createNewTask } = props;

  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
    status: "Pending",
  });

  const [errorApi, setErrorApi] = useState([]);

  function handleValues(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await createNewTask(values);
      setVisible();
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      setErrorApi(errorMessage.split(","));
    }
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

        {errorApi.length > 0 && errorApi.map((error) => <p>{error}</p>)}

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
