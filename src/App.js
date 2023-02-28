import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/sites/Home";
import About from "./components/sites/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/About"} element={<About/>}/>
        </Routes>
          <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link o={"/About"}>About</Link></li>
          </ul>
      </header>
    </div>
  );
}

export default App;
