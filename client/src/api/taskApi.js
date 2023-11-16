import httpClient from "./httpClient";

const TASK_ROUTE = "/task";

async function getAllTasksApi() {
  return (await httpClient.get(TASK_ROUTE)).data;
}

async function createTaskApi(task) {
  return (await httpClient.post(TASK_ROUTE, task)).data;
}

async function updateTaskApi(taskId, task) {
  return (await httpClient.put(`${TASK_ROUTE}/${taskId}`, task)).data;
}

async function deleteTaskApi(taskId) {
  return (await httpClient.delete(`${TASK_ROUTE}/${taskId}`)).data;
}

export { getAllTasksApi, createTaskApi, updateTaskApi, deleteTaskApi };
