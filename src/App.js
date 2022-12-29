import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Check = () => {
  return <h1>Heloo</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Check />} />
      </Route>
    </Routes>
  );
}

export default App;
