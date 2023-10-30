import { Route, Routes } from "react-router-dom";
import "./App.css";
import Components from "./Components";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
