import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Check = () => {
  return <h1>Heloo</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Check />} />
      </Route>
    </Routes>
  );
}

export default App;
