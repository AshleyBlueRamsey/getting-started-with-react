import "./App.css";

function WelcomeBack() {
  return <p>Welcome back, valued customer!</p>
}

function App() {
  return (
    <WelcomeBack />
    <WelcomeBack />
  );
}

export default App;
