import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogInteraction from "./pages/LogInteraction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/log" element={<LogInteraction />} />
    </Routes>
  );
}

export default App;