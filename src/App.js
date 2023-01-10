import "./App.css";
import { ThemeProvider } from "./themeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
