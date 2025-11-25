import { useState } from "react";
import WeatherInputParent from "./tasks/WeatherInput";
import AttendanceParent from "./tasks/Attendance";
import LoginConditionalParent from "./tasks/LoginConditional";
import SimpleWeatherParent from "./tasks/SimpleWeather";
import ColorParent from "./tasks/PrimaryColor";
import TableRenderParent from "./tasks/TableRender";
import UserInputDetails from "./tasks/UserInputDetails";
import DropDownSelect from "./tasks/DropDownSelect";
import ConditionalLoginWithSideEffect from "./tasks/ConditionalLoginWithSideEffect";
import FeedbackForm from "./tasks/FeedbackForm";
import LoginWithRoute from "./tasks/LoginWithRoute";
import CityAndCountryDropDownParent from "./tasks/CityAndCountryDropDown";
import RoutingWithMultiplePages from "./tasks/RoutingWithMultiplePages";

function App() {
  const allTasks = {
    Attendance: AttendanceParent,
    "Weather Input": WeatherInputParent,
    "Login Conditional": LoginConditionalParent,
    "Simple Weather": SimpleWeatherParent,
    "Primary Color": ColorParent,
    "Table Rendering": TableRenderParent,
    "User Input Details": UserInputDetails,
    "Dropdown Select Student": DropDownSelect,
    "Conditional Login with Side Effect": ConditionalLoginWithSideEffect,
    "Feedback Form": FeedbackForm,
    "Login with Route": LoginWithRoute,
    "City and country dropdown": CityAndCountryDropDownParent,
    "Routing with multiple Pages": RoutingWithMultiplePages,
  };
  const [selectTask, setSelectTask] = useState("Attendance");

  const tasks = Object.keys(allTasks);

  const CurrentTask = allTasks[selectTask];

  return (
    <div>
      <select
        value={selectTask}
        onChange={(e) => {
          document.title = e.target.value;
          setSelectTask(e.target.value);
        }}
        style={{ width: "400px", marginBottom: "2rem" }}
      >
        {tasks.map((task, i) => (
          <option value={task} key={task}>{`Task ${i + 1}: ${task}`}</option>
        ))}
      </select>
      <fieldset style={{ height: "100%" }}>
        <legend>{selectTask}</legend>
        <CurrentTask />
      </fieldset>
    </div>
  );
}

export default App;
