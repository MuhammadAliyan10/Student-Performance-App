import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Standing from "./Pages/Standing";
import Search from "./Pages/Search";
import Message from "./Pages/Message";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standing" element={<Standing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
