import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import AnalystPage from "./pages/analyst/AnalystPage";
import NovelsPage from "./pages/novels/NovelsPage";
import AddChapters from "./pages/add/AddChapters";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<AnalystPage />} />
        <Route path="/chapters" element={<NovelsPage />} />
        <Route path="/addchapters" element={<AddChapters />} />
      </Routes>
    </div>
  );
}

export default App;
