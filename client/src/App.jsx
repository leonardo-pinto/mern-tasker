import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./views/Login";
import Register from "./views/Register";
import Tasks from "./views/Tasks";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
