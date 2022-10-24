import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "../App.css";
import Dashboard from "./Dashboard/Dashbord";
import Portals from "./Portals/Portals";
import Users from "./Users/Users";

function App() {
return (
  <BrowserRouter>
  <div className="App">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="btn btn-header">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/portals" className="btn btn-header">
              <span>Portals</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="btn btn-header">
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path="/bookings" element={<Dashboard />} />
      <Route path="/bookables" element={<Portals />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;