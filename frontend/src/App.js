import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Navbar from "./components/navbar/Navbar";
import Courses from "./pages/courses/course-wrapper/Courses";
import Volunteer from "./pages/volunteer/Volunteer";
import { MeetTheTeam } from "./pages/meet-the-team/MeetTheTeam";
import { Footer } from "./pages/footer/Footer";
import employees from "./data/Employees";

// Yixuan: forms, second page, home page
// Brian: navbar, courses, and meet the team

function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
