import React, { useState } from "react";

const DropDownSelect = () => {
  const students = ["Dinesh", "Arun", "Dhana", "Ram", "Mani"];
  const [selectStudent, setSelectStudent] = useState("");

  return (
    <div>
      <select
        value={selectStudent}
        onChange={(e) => {
          setSelectStudent(e.target.value);
        }}
        style={{ width: "400px", margin: "auto", marginBottom: "2rem" }}
      >
        <option value="">Select Student</option>
        {students.map((student, i) => (
          <option value={student} key={student}>{`student ${
            i + 1
          }: ${student}`}</option>
        ))}
      </select>
      <h1>
        {selectStudent
          ? `You selected : ${selectStudent}`
          : "Please select one Student"}
      </h1>
    </div>
  );
};

export default DropDownSelect;
