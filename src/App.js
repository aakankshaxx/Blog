import { Home } from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';


function App() {
  const user = true;
  return (
    <Router>

    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/write" element={user ? <Write/> : <Register/>}>
        </Route>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}>
        </Route>
        <Route path="/post/postId" element={<Single/>}>
        </Route>

        </Routes>
      </Router>
    

  
  );
}

export default App;
