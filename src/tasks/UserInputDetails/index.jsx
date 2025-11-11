import { useState } from "react";
const reset = { name: "", email: "", age: "", dob: "" };
const UserInputDetails = () => {
  const [user, setUser] = useState(reset);
  const [users, setUsers] = useState([]);

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setUser((p) => ({ ...p, [id]: value }));
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { name, age, email, dob } = user;
          if (name && age && email && dob) {
            setUsers((p) => [...p, user]);
            setUser(reset);
          } else {
            alert("Please enter all the values");
          }
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            value={user.dob}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="save" />
      </form>
      {!users.length ? (
        <h3>No user found. Please add user using form 👆️. </h3>
      ) : (
        <table
          cellPadding={5}
          border={1}
          style={{ borderCollapse: "collapse", marginTop: 10 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ age, name, dob, email }) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{age}</td>
                  <td>{dob}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserInputDetails;
