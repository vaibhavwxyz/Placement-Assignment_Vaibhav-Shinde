import Dashboard from "./Dashboard";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
