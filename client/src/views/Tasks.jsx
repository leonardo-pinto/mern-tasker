import { useState } from "react";
import TheTask from "../components/TheTask";
import CreateTaskDialog from "../components/CreateTaskDialog";
import UpdateTaskDialog from "../components/UpdateTaskDialog";
import DeleteTaskDialog from "../components/DeleteTaskDialog";

function Tasks() {
  const [showCreateTaskDialog, setShowCreateTaskDialog] = useState(false);
  const [showUpdateTaskDialog, setShowUpdateTaskDialog] = useState(false);
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = useState(false);
  const [idTaskToDelete, setIdTaskToDelete] = useState();
  const [taskToUpdate, setTaskToUpdate] = useState();

  const [tasks, setTasks] = useState([
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
  ]);

  function handleShowCreateTaskDialog() {
    setShowCreateTaskDialog(!showCreateTaskDialog);
  }

  function handleShowUpdateTaskDialog(task) {
    setTaskToUpdate(task);
    setShowUpdateTaskDialog(!showUpdateTaskDialog);
  }

  function handleShowDeleteTaskDialog(_id) {
    if (!showDeleteTaskDialog) {
      setIdTaskToDelete(_id);
    } else {
      setIdTaskToDelete(null);
    }
    setShowDeleteTaskDialog(!showDeleteTaskDialog);
  }

  function createNewTask(task) {
    task._id = new Date();
    setTasks([...tasks, task]);
  }

  function deleteTask(_id) {
    const filteredArray = tasks.filter((task) => task._id != _id);
    setTasks(filteredArray);
  }

  function updateTask(updatedTask) {
    const updatedArray = tasks.map((task) => {
      if (task._id === updatedTask._id) {
        task = updatedTask;
      }
      return task;
    });
    setTasks(updatedArray);
  }

  return (
    <>
      <h1>TASKS</h1>
      <button type="button" onClick={handleShowCreateTaskDialog}>
        Create New Task
      </button>
      {showCreateTaskDialog ? (
        <CreateTaskDialog
          setVisible={handleShowCreateTaskDialog}
          createNewTask={createNewTask}
        />
      ) : (
        <></>
      )}
      {showUpdateTaskDialog ? (
        <UpdateTaskDialog
          setUpdateTaskDialogVisible={handleShowUpdateTaskDialog}
          task={taskToUpdate}
          updateTask={updateTask}
        />
      ) : (
        <></>
      )}
      {showDeleteTaskDialog ? (
        <DeleteTaskDialog
          deleteTask={deleteTask}
          idTaskToDelete={idTaskToDelete}
          setDeleteTaskDialogVisible={handleShowDeleteTaskDialog}
        />
      ) : (
        <></>
      )}
      <div>
        {tasks.map((task) => {
          return (
            <TheTask
              task={task}
              key={task._id}
              handleShowUpdateTaskDialog={handleShowUpdateTaskDialog}
              handleShowDeleteTaskDialog={handleShowDeleteTaskDialog}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
