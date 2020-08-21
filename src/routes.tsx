
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomeContent from './pages/HomeContent/HomeContent';

import Login from "./pages/Login/Login";
import Register from './pages/Register/Register'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={HomeContent} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
    </BrowserRouter>   
  );
};

export default Routes;