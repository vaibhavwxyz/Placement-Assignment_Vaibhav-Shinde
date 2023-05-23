import { useTheme } from "./ThemeContext";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Dashboard;
