import { useState } from "react";
import WeatherInputParent from "./tasks/WeatherInput/WeatherInputParent";
import AttendanceParent from "./tasks/Attendance/AttendanceParent";
import LoginConditionalParent from "./tasks/LoginConditional/LoginConditionalParent";
import SimpleWeatherParent from "./tasks/SimpleWeather/SimpleWeatherParent";
import ColorParent from "./tasks/PrimaryColor/ColorParent";
import TableRenderParent from "./tasks/TableRender/TableRenderParent";
import "./App.css";

function App() {
  const allTasks = {
    Attendance: AttendanceParent,
    "Weather Input": WeatherInputParent,
    "Login Conditional": LoginConditionalParent,
    "Simple Weather": SimpleWeatherParent,
    "Primary Color": ColorParent,
    "Table Rendering": TableRenderParent,
  };
  const [selectTask, setSelectTask] = useState("Attendance");

  const tasks = Object.keys(allTasks);
  const CurrentTask = allTasks[selectTask];
  return (
    <div>
      <select
        value={selectTask}
        onChange={(e) => setSelectTask(e.target.value)}
        style={{ width: "400px", margin: "auto", marginBottom: "2rem" }}
      >
        {tasks.map((task, i) => (
          <option value={task} key={task}>{`Task ${i + 1}: ${task}`}</option>
        ))}
      </select>

      <CurrentTask />
    </div>
  );
}

export default App;
