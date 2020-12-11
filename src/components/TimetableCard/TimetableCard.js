import React, { Component } from "react";
import classes from "./TimetableCard.module.scss";


class TimetableCard extends Component{
    constructor(props) {
        super(props);
        // this.speakers = this.props.speakers;
      }


    // renderSpeakers = () => { // надо пофиксить
    //     return (this.speakers != null) && this.speakers.map((speaker) => {
    //         return (
    //           <li key={speaker.id}>
    //             <UserPhoto/>
    //             <div className={classes.TimetableCard__Speakers__Info}>
    //                 <div className={classes.TimetableCard__Speakers__Info__Name}>
    //             {speaker.name}{" "}{speaker.surname}
    //             </div>
    //             <div className={classes.TimetableCard__Speakers__Info__Career}>
    //             {speaker.career}
    //             </div>
    //             </div>
    //           </li>
    //         );
    //       });
    // }



    render(){
        return (
            <div className={classes.TimetableCard}>
                <div className={classes.TimetableCard__Time}>
                    <span>{this.props.startTime} - {this.props.endTime}</span>
                    {/* <button>Добавить в "Мое расписание"
                    <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                    </button> */}
                </div>
                <div className={classes.TimetableCard__Title}>
                    {this.props.title}
                </div>
                <div className={classes.TimetableCard__Description}>
                    {this.props.text}
                </div>
                <div className={classes.TimetableCard__Instructor}>
                    <span>
                        Инструктор: 
                    </span>
                    <p>
                        {this.props.instructor}
                    </p>
                </div>
                <button className={classes.TimetableCard__ButtonSingUp}>
                    Записаться
                </button>
            </div>
        )
    }
}

export default TimetableCard