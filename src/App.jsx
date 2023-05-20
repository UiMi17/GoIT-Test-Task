import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
    </Routes>
  );
}

export default App;
