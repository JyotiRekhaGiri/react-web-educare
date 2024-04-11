import React from 'react';
import Home from "./components/Home/Home";
import User from "./components/User/User";
import NewAccount from "./components/NewAccount/NewAccount";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
