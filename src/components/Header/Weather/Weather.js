import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherThunk } from "../../../store/slices/weatherSlice";
import styles from './Weather.module.scss'

const Weather = ({ weather, isFetching, error, getWeather }) => {
  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!! {error.message}</div>}
      {!isFetching && !error && weather.current && (

        <div className={styles.weatherWrapper}>
          <h3>Current Weather Zaporizhzhia:</h3>
          <p>{weather.current.temperature_2m} °C</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.weather.isFetching,
  error: state.weather.error,
  weather: state.weather.weather,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(getWeatherThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);