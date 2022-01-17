import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Navbar from "./components/navbar/Navbar";
import Courses from "./pages/courses/course-wrapper/Courses";
import Mission from "./pages/mission/Mission";

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
                <Route path="/mission" element={<Mission />} />
            </Routes>
        </Router>
    );
}

export default App;
