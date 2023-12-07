export default function TasksTable(props) {
  const { toggleDialog, tasks } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
              <td>
                <span>
                  <button
                    type="button"
                    id="table-edit-btn"
                    onClick={() => toggleDialog("updateDialog", task)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="red-bg"
                    onClick={() => toggleDialog("deleteDialog", task._id)}
                  >
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
