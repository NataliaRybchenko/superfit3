import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss";

class Menu extends React.Component {

render() {
    return (
        <div className={classes.Menu}>
            <div className={classes.Menu__Text}>
                <div>
                    {/* <i className="fa fa-calendar fa-lg" aria-hidden="true"></i> */}
                    Про SuperFit
                </div>
                |
                <div>
                    <NavLink to="/timetable">
                        {/* <i className="fa fa-users" aria-hidden="true"></i> */}
                        Расписание
                    </NavLink>
                </div>   
            </div>    
        </div>
    );
  }
}


export default Menu