import React, { Component } from "react";
import classes from "./Timetable.module.scss";
import { connect } from "react-redux";
// import DateCard from "../../../components/Timetable/DateCard/DateCard";
// import { changeDate } from "../../../store/actions/timetable";
// import EventCard from "../../../components/Timetable/EventCard/EventCard";
import TimetableCard from "../../components/TimetableCard/TimetableCard";
import { fetchTimetable } from "../../store/timetable";
import { Loader } from "../../components/Loader/Loader";

class Timetable extends Component {

  state = {
    selectedDay: 0
  };
  

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  formatDate(timestamp) {
    const d = new Date(timestamp);
    const date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
    return date;
  }

  

  componentDidMount() {
    this.props.fetchTimetable();

  }

  selectDay(index){
    this.setState({
      selectedDay: index
    })
    
  }

  renderDays() {
    return this.props.days.map((day, index) => {
      
      if (this.state.selectedDay === index) {
      return (
        <button className={classes.Timetable__DayButtons__Selected} onClick={() => this.selectDay(index)} key={index}>
          <span className={classes.Timetable__DayButtons__Title}>
            День {index + 1}
          </span>
          <span className={classes.Timetable__DayButtons__Day}>
            {day}
          </span>
        </button>
      )}
      else{
        return (
          <button onClick={() => this.selectDay(index)} key={index}>
            <span className={classes.Timetable__DayButtons__Title}>
              День {index + 1}
            </span>
            <span className={classes.Timetable__DayButtons__Day}>
              {day}
            </span>
          </button>
        )
      }
    });
  }

  renderRoom() {
    return this.props.rooms.map((room, index) => {
      return (
        <div key={index} className={classes.Timetable__Rooms__Background}>
          <div className={classes.Timetable__Rooms__Background__Title}>
            <span>Зал {index+1}</span>
          </div>
          <div className={classes.Timetable__Rooms__Background__Lessons}>
            {this.renderLessons(room)}
          </div>
        </div>
      );
    });
  }

  renderLessons(room) {
    return this.props.timetable.map((event, index) => {
      if (event.room === room && this.formatDate(event.startTime)===this.props.days[this.state.selectedDay]){
        return (
            <TimetableCard
              key={index}
              startTime={this.formatTime(event.startTime)}
              title={event.title}
              text={event.description}
              endTime = {this.formatTime(event.endTime)}
              instructor = {event.instructor}
            />
        );
      }}
    )
  }


  render() {
    return (
      <div className={classes.Timetable}>
        {this.props.loading ? (
          <Loader />
        ) : (
          <>
            <div className={classes.Timetable__DayButtons}>
              {this.renderDays()}
            </div>
            <div className={classes.Timetable__Rooms}>
              {this.renderRooms()}
            </div>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timetable: state.timetable.timetable,
    loading: state.timetable.loading,
    days: state.timetable.days,
    rooms: state.timetable.streams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTimetable: () => dispatch(fetchTimetable()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);