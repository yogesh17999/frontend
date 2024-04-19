// src/App.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import LoginModal from "./LoginModal";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Overview from './pages/overview';
import Charts from './pages/charts';
import Cli  from './pages/cli';
import Users from './pages/users';
import Companies from './pages/companies';
import Admin_settings from './pages/admin_settings';

import HomePage from './HomePage';
import Page2 from './components/Page2';
import { Windmill } from '@windmill/react-ui'
import { Settings } from 'lucide-react';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Sidebar is expanded by default

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            {loggedIn ? (
              <HomePage username={username} />
            ) : (
              <LoginModal onLogin={handleLogin} />
            )}
          </Route>

          <Route path="/page2">
            {" "}
            <Page2 />{" "}
          </Route>
          <Route path="/overview">
            {" "}
            <Overview />{" "}
          </Route>
          <Route path="/Charts">
            {" "}
            <Charts />{" "}
          </Route>
          <Route path="/Cli">
            {" "}
            <Cli />{" "}
          </Route>
          <Route path="/Users">
            {" "}
            <Users />{" "}
          </Route>
          <Route path="/Companies">
            {" "}
            <Companies />{" "}
          </Route>
          <Route path="/Admin_settings">
            {" "}
            <Admin_settings />{" "}
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
