import HomePage from "./components/homePage";
import ThemeProvider from "./providers/themeProv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <HomePage />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
