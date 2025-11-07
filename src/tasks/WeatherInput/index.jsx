import { useState } from "react";

const WeatherInputParent = () => {
  const [currentTemperature, setCurrentTemperature] = useState(0);
  // const getLocation = async () => {
  //   const data = await fetch(
  //     "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=2okwS8d5wVZpwcrnlXMxjAJqP8WND8zx"
  //   );
  //   console.log(await data.json());
  // };
  // getLocation();
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords }) => {
  //       console.log();
  //     },
  //     () => {}
  //   );
  // }
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setCurrentTemperature(parseInt(e.target.value));
        }}
        value={currentTemperature}
      />
      <h1>
        {currentTemperature === 0
          ? ""
          : currentTemperature < 0
          ? "Freezing/Very Cold ❄️"
          : currentTemperature >= 0 && currentTemperature < 10
          ? "Chilly/Cold 🧥"
          : currentTemperature >= 10 && currentTemperature < 20
          ? "Mild/Cool 😊"
          : currentTemperature >= 20 && currentTemperature < 30
          ? "Warm/Pleasant ☀️"
          : "Hot/Very Warm 🌡️"}
      </h1>
    </div>
  );
};

export default WeatherInputParent;
