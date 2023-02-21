/*
入口JS
 */
import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* <Routes>
      <Route path='/' element={<Navigate to='/home' />}></Route>
      {
        routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<item.component />}
          />
        ))
      }
    </Routes> */}
    <App />
  </Router>
);
