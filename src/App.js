import React from "react";
const todos = [
  { completed: false, description: "Finish the Lists and Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

function App() {
  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return <ul>{listItems</ul>;
}

export default App;
