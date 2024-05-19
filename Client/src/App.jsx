import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Standing from "./Pages/Standing";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standing" element={<Standing />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
