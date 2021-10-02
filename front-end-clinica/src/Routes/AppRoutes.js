import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Register from "../Logic/Register";
import Login from "../Logic/Login";
import NewOdontologo from "../Logic/NewOdontologo";
import Citas from "../Logic/Citas";
import Pacientes from "../Logic/Pacientes";
import Odontologo from "../Logic/Odontologo";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/meets/auth" component={Citas} />

          <Route exact path="/meets" component={Login} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/patients" component={Pacientes} />
          <Route exact path="/odontology" component={Odontologo} />
          <Route exact path="/admin" component={NewOdontologo} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRoutes;
