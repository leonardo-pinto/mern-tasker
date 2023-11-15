import PropTypes from "prop-types";

function TheTask(props) {
  const { title, description, status, date } = props.task;

  return (
    <div id="task-container">
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <p>Date: {date}</p>
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
