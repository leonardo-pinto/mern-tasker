import { useState } from "react";
import TheTask from "../components/TheTask";
import CreateTaskDialog from "../components/CreateTaskDialog";

function Tasks() {
  const [showCreateTaskDialog, setShowCreateTaskDialog] = useState(false);

  function handleShowCreateTaskDialog() {
    setShowCreateTaskDialog(!showCreateTaskDialog);
  }

  const tasks = [
    {
      _id: "1",
      title: "Study React",
      description: "See how to build a component",
      status: "Pending",
      date: "2023-11-14",
    },
    {
      _id: "2",
      title: "Study Java",
      description: "JavaFX controls",
      status: "Pending",
      date: "2023-11-18",
    },
    {
      _id: "3",
      title: "Groceries",
      description: "Chicken, milk and bread",
      status: "Pending",
      date: "2023-11-24",
    },
  ];

  return (
    <>
      <h1>TASKS</h1>
      <button onClick={handleShowCreateTaskDialog}>Create New Task</button>
      {showCreateTaskDialog ? (
        <CreateTaskDialog setVisible={handleShowCreateTaskDialog} />
      ) : (
        <></>
      )}
      <div>
        {tasks.map((task) => {
          return <TheTask task={task} key={task._id} />;
        })}
      </div>
    </>
  );
}

export default Tasks;
