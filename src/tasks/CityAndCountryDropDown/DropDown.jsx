const DropDown = ({ id, onChange, value, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      id={id}
      style={{ width: "400px", marginBottom: "2rem" }}
    >
      {options.map((option) => (
        <option value={option} key={option}>{` ${option}`}</option>
      ))}
    </select>
  );
};

export default DropDown;
