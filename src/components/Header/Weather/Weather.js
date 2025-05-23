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
          <h3>Zaporizhzhia:</h3>
          <p className={styles.degrees}>{weather.current.temperature_2m}°C</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({weather:{isFetching,error,weather}}) => ({
  isFetching: isFetching,
  error: error,
  weather: weather,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(getWeatherThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);