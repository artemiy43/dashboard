import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MainLayout } from "./layouts/MainLayout";
import { Sign } from "./components/Sign";
import { Routes, Route } from "react-router-dom";

const App = () => {
  //console.log("app rendered");
  //const [counter, setCounter] = useState<number>(0);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Sign />} />
    </Routes>
  );
};

export default App;
