import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./styles/main.css"
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="inventory" element={<Inventory />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
