import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <>
    <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
