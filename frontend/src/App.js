import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Navbar from "./components/navbar/Navbar";
import Courses from "./pages/courses/course-wrapper/Courses";
import Jobs from "./pages/jobs/Jobs";
// import { MeetTheTeam } from "./pages/meet-the-team/MeetTheTeam";
import { Footer } from "./pages/footer/Footer";
// import employees from "./data/Employees";
import ContactUs from "./pages/contact-us/ContactUs";
import CourseInfoWrapper from "./pages/courses/course-info-wrapper/CourseInfoWrapper";
import NotFound from "./pages/NotFound/NotFound";
import CourseSignup from "./pages/courses/course-signup/CourseSignup";
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
                <Route path="/course/:cid" element={<CourseInfoWrapper />} />
                <Route path="/apply" element={<Jobs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/course/signup/:cid" element={<CourseSignup />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
