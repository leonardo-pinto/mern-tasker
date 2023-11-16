import { useState, useEffect } from "react";
import TheTask from "../components/TheTask";
import CreateTaskDialog from "../components/CreateTaskDialog";
import UpdateTaskDialog from "../components/UpdateTaskDialog";
import DeleteTaskDialog from "../components/DeleteTaskDialog";
import { getAllTasksApi } from "../api/taskApi";

function Tasks() {
  const [showCreateTaskDialog, setShowCreateTaskDialog] = useState(false);
  const [showUpdateTaskDialog, setShowUpdateTaskDialog] = useState(false);
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = useState(false);
  const [idTaskToDelete, setIdTaskToDelete] = useState();
  const [taskToUpdate, setTaskToUpdate] = useState();
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    try {
      const response = await getAllTasksApi();
      setTasks(response);
    } catch (error) {
      console.error(`Error while retrieving tasks: ${JSON.stringify(error)}`);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

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
