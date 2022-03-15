import Login from "./Views/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
