import Joke from "./Components/Joke";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Joke />
    </ErrorBoundary>
  );
}

export default App;
