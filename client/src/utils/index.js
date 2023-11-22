function setLocalStorage(result) {
  const { accessToken, username } = result;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("username", username);
}

function clearLocalStorage() {
  localStorage.clear();
}

export { setLocalStorage, clearLocalStorage };
