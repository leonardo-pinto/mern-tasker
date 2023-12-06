function DeleteTaskDialog(props) {
  const { setDeleteTaskDialogVisible, deleteTask, idTaskToDelete } = props;

  function handleDeleteTask() {
    // call api
    deleteTask(idTaskToDelete);
    setDeleteTaskDialogVisible();
  }

  return (
    <div className="dialog">
      <div className="dialog-form">
        <h1>Delete Task</h1>
        <p>Are you sure you want to delete this task?</p>

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
