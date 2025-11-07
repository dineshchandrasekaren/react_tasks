import WeatherInfo from "./WeatherInfo";

function SimpleWeatherParent() {
  const weatherData = { city: "Chennai", temp: 30 };

  return (
    <div>
      <h2>Weather Report</h2>
      <WeatherInfo weather={weatherData} />
    </div>
  );
}

export default SimpleWeatherParent;
