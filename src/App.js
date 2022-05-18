// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";
import View from "./pages/view";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to={"/edit"} className="nav-link">
                  edit
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
