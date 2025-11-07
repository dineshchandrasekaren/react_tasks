import { useState } from "react";

export default function AttendanceParent() {
  const [students, setStudents] = useState([
    { id: 1, name: "Dinesh", status: true },
    { id: 2, name: "Karthi", status: false },
    { id: 3, name: "Dhana", status: true },
  ]);

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === true ? false : true,
            }
          : student
      )
    );
  };
  // const studentsArray = [];
  // for (let i = 0; i < students.length; i++) {
  //   const student = students[i];
  //   studentsArray.push(
  //     <tr key={student.id}>
  //       <td>{student.id}</td>
  //      <td>{student.name}</td>
  //       <td>{student.status ? "✅" : "❌"}</td>
  //       <td>
  //         <button onClick={() => toggleStatus(student.id)}>
  //           Mark {student.status === true ? "Present" : "Absent"}
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // }
  return (
    <div>
      <h1>Student Attendance</h1>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* {studentsArray} */}
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status ? "✅" : "❌"}</td>
              <td>
                <button onClick={() => toggleStatus(student.id)}>
                  Mark {student.status === true ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
