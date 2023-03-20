// import './App.css';
import HomePage from "./components/homePage";
import ThemeProvider from "./providers/themeProv";
// import ValidationProvider from "./providers/validation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          {/* <ValidationProvider> */}
            <HomePage />
          {/* </ValidationProvider> */}
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
