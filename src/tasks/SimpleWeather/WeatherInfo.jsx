function WeatherInfo({ weather }) {
  return (
    <h3>
      Current temperature in {weather.city} is {weather.temp}°C
    </h3>
  );
}

export default WeatherInfo;
