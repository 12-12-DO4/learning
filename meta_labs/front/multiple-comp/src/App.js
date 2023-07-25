import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First Card's h2" h3="First Card's h3" />
      <Card h2="Second Card's h2" h3="Second Card's h3" />
      <Card h2="Third Card's h2" h3="Third Card's h3" />
    </div>
  );
}

export default App;
