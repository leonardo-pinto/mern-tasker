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
import { toast, ToastContainer } from "react-toastify";

function Tasks() {
  const [showTaskDialog, setShowTaskDialog] = useState({
    createDialog: false,
    updateDialog: false,
    deleteDialog: false,
  });
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
      toast.success("Task Created!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } catch (error) {
      console.error(`Error while creating task: ${JSON.stringify(error)}`);
    }
  }

  async function deleteTask(_id) {
    try {
      await deleteTaskApi(_id);
      const filteredArray = tasks.filter((task) => task._id != _id);
      setTasks(filteredArray);
      toast.success("Task Deleted!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
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
      toast.success("Task Updated!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } catch (error) {
      console.error(`Error while updating task: ${JSON.stringify(error)}`);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  function handleShowTaskDialog(dialogType, value) {
    if (dialogType == "updateDialog") {
      setTaskToUpdate(value);
    } else if (dialogType == "deleteDialog") {
      setIdTaskToDelete(value);
    }

    setShowTaskDialog({
      ...showTaskDialog,
      [dialogType]: !showTaskDialog[dialogType],
    });
  }

  return (
    <>
      <ToastContainer />
      <h1>TASKS</h1>
      <button
        type="button"
        onClick={() => handleShowTaskDialog("createDialog")}
      >
        Create New Task
      </button>
      {showTaskDialog.createDialog ? (
        <CreateTaskDialog
          toggleDialog={handleShowTaskDialog}
          createNewTask={createNewTask}
        />
      ) : (
        <></>
      )}
      {showTaskDialog.updateDialog ? (
        <UpdateTaskDialog
          toggleDialog={handleShowTaskDialog}
          task={taskToUpdate}
          updateTask={updateTask}
        />
      ) : (
        <></>
      )}
      {showTaskDialog.deleteDialog ? (
        <DeleteTaskDialog
          deleteTask={deleteTask}
          idTaskToDelete={idTaskToDelete}
          toggleDialog={handleShowTaskDialog}
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
              handleShowUpdateTaskDialog={handleShowTaskDialog}
              handleShowDeleteTaskDialog={handleShowTaskDialog}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
