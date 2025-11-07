import React from "react";

const TableRenderParent = () => {
  const Students = [
    { roleNo: 1, name: "Dinesh", grade: "A" },
    { roleNo: 2, name: "Arun", grade: "B" },
    { roleNo: 3, name: "Dhana", grade: "A" },
    { roleNo: 4, name: "Ram", grade: "C" },
    { roleNo: 5, name: "Mani", grade: "B" },
  ];
  const keys = Object.keys(Students[0]);
  return (
    <div>
      <table cellPadding="8">
        <thead>
          <tr>
            {keys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Students.map((student) => (
            <tr>
              <td>{student.roleNo}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRenderParent;
