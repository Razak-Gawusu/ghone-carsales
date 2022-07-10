import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./styles/main.css"
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

import Error from "./pages/Error";
import CustomOrder from "./pages/CustomOrder";
import Contact from "./pages/Contact";
import HappyCustomers from "./pages/HappyCustomers";
import InventorySingleLayout from "./pages/InventorySingleLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="inventory" element={<Inventory />}/>
            <Route path="inventory/:id" element={<InventorySingleLayout />}/>
            <Route path="customOrder" element={<CustomOrder />}/>
            <Route path="happyCustomers" element={<HappyCustomers />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
