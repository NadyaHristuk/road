import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import RoadListPage from "./components/RoadListPage";
import DirectoryPage from "./components/DirectoryPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/road-list" element={<RoadListPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/" element={<Navigate to="/road-list" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
