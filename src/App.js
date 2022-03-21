import Login from "./Views/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Entry from "./Views/Entry";
import Inventory from "./Views/Inventory";
import Exit from "./Views/Exit";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dash' element={<Dashboard />} />
                    <Route path='/entry' element={<Entry />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/exit' element={<Exit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
