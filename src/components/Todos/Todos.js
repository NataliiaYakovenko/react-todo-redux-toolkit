import React from "react";
import { connect } from "react-redux";

const Todos = ({ arrayTask }) => {
  return (
    <div >
      {arrayTask.map((task) => {
        return task.text;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  arrayTask: state.todo.arrayTask,
});

const mapDispatchToProps = (dispatch) => ({
  // getWeather: () => dispatch(getWeatherThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
