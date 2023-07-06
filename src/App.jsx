import Joke from "./Components/Joke";
import Title from "./Components/Title";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Title />
      <Joke />
    </ErrorBoundary>
  );
}

export default App;
