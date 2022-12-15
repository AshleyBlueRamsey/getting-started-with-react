import "./App.css";

function App() {
  const name = "Alice";
  const url = "https://www.google.com/";
  const linkText = "Google";
  const element = (
    <p>
      {" "}
      Hey, {name}! Please visit <a href={url}>{linkText}</a>.
    </p>
  );

  return element;
}

export default App;
