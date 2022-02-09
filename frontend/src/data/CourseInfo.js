import { checker } from "./EmployeeChecker";
import webdev from "../images/webdev.jpg";
import javascript from "../images/javascript_image.jpg";
import java from "../images/java.jpg";
import comingSoon from "../images/question_mark.jpg";

const CourseInfo = [
    {
        id: 1,
        title: "Web Dev 1",
        price: 250,
        description:
            "Web Dev 1 is our recommended starter course for someone who is looking to try out coding. After completing this course, students will be able to create a fully-fledged website using HTML and CSS that will be accessible to anyone in the world! Students will also become familiar with development platforms like repl.it.",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        ],
        image: webdev,
        video: "https://www.youtube.com/embed/pKO9UjSeLew",
        teachers: checker("Web Dev 1"),
    },
    {
        id: 2,
        title: "Web Dev 2",
        price: 250,
        description:
            "In Web Dev 2, students will learn the basics of vanilla JS and learn how to incorporate it with their previous websites. Students will also learn how to make their websites responsive using flexbox and media queries. Having experience with HTML or Java is required before beginning this course. It is highly recommended to take Web Dev 1 for those who have no experience.",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        ],
        image: javascript,
        video: "https://www.youtube.com/embed/pKO9UjSeLew",
        teachers: checker("Web Dev 2"),
    },
    {
        id: 3,
        title: "Java",
        price: 250,
        description:
            "In this course students will dive pretty extensively into developing with Java. It is structured around being a prep course for AP Computer Science Java which is available in most highschools. No prior coding experience is needed to take this course",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        ],
        image: java,
        video: "https://www.youtube.com/embed/pKO9UjSeLew",
        teachers: checker("Java"),
    },
    {
        id: 4,
        title: "Coming Soon...",
        price: 250,
        description: "",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        ],
        image: comingSoon,
        video: "https://www.youtube.com/embed/pKO9UjSeLew",
        teachers: checker("none"),
    },
];

export default CourseInfo;

//Teachers - Reuse meet the team carousel
//Price
//Brief description
//Overview of curriculum
//Project by student after completing course
//Projects showcase - Get people to build as a hiring requirement
//Add video preview
