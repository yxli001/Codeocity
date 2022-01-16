import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Navbar from "./components/navbar/Navbar";

// Yixuan: forms, second page, home page
// Brian: navbar, courses, and meet the team

function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
}

export default App;
