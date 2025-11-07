import PrimaryColor from "./PrimaryColor";

export default function ColorParent() {
  const colors = ["red", "green", "blue"];
  return (
    <div className="App">
      <PrimaryColor colors={colors} />
    </div>
  );
}
