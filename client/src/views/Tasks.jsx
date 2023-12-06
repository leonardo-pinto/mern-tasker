import { useState, useEffect } from "react";
import TheTask from "../components/TheTask";
import CreateTaskDialog from "../components/CreateTaskDialog";
import UpdateTaskDialog from "../components/UpdateTaskDialog";
import DeleteTaskDialog from "../components/DeleteTaskDialog";
import {
  getAllTasksApi,
  createTaskApi,
  deleteTaskApi,
  updateTaskApi,
} from "../api/taskApi";

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

  async function createNewTask(task) {
    try {
      const newTask = await createTaskApi(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error(`Error while creating task: ${JSON.stringify(error)}`);
    }
  }

  async function deleteTask(_id) {
    try {
      await deleteTaskApi(_id);
      const filteredArray = tasks.filter((task) => task._id != _id);
      setTasks(filteredArray);
    } catch (error) {
      console.error(`Error while deleting task: ${JSON.stringify(error)}`);
    }
  }

  async function updateTask(updatedTask) {
    try {
      const response = await updateTaskApi(taskToUpdate._id, updatedTask);
      const updatedArray = tasks.map((task) => {
        if (task._id === response._id) {
          task = response;
        }
        return task;
      });
      setTasks(updatedArray);
    } catch (error) {
      console.error(`Error while updating task: ${JSON.stringify(error)}`);
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

  return (
    <>
      <h1>TASKS</h1>
      <button
        className="w-50"
        type="button"
        onClick={handleShowCreateTaskDialog}
      >
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
