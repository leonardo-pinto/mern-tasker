import PropTypes from "prop-types";

function TheTask(props) {
  const { _id, title, description, status, date } = props.task;
  const { handleShowDeleteTaskDialog, handleShowUpdateTaskDialog } = props;

  return (
    <div id="task-container">
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <p>Date: {date}</p>

      <span>
        <button
          type="button"
          onClick={() => handleShowUpdateTaskDialog("updateDialog", props.task)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleShowDeleteTaskDialog("deleteDialog", _id)}
        >
          Delete
        </button>
      </span>
    </div>
  );
}

TheTask.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default TheTask;
