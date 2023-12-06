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
          value={values.title}
          onChange={handleValues}
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
          value={values.description}
          onChange={handleValues}
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
          value={values.date}
          onChange={handleValues}
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

        {errorApi.length > 0 && errorApi.map((error) => <p>{error}</p>)}

        <span>
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
