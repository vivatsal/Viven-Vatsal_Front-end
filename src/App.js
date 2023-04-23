import "./App.css";
import List from "./components/list";

function App() {
  const items = [
    { text: "Chennai Super Kings" },
    { text: "Royal Challengers Bangalore" },
    { text: "Kolkata Knight Riders" },
    { text: "Mumbai Indians" },
    { text: "Gujarat Titans" },
    { text: "Punjab Kings" },
  ];
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
