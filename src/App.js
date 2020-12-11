import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Logo from "./components/Logo/Logo";
import Timetable from "./pages/Timetable/Timetable";

// import classes from "*.module.css";


class App extends Component {
  render (){
    let routes = (
      <Switch>
        {/* <Route path="/aboutClub" component={AboutClub} /> */}
        <Route path="/timetable" component={Timetable} />

        <Redirect to="/" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <div className="App">
          <Logo/>
          <Menu/>
              {routes}
        </div>

      </BrowserRouter> 
    );
  }
}

export default App;
