import { checker } from "./EmployeeChecker";
import webdev from "../images/webdev.jpg";
import javascript from "../images/javascript_image.jpg";
import java from "../images/java.png";
import comingSoon from "../images/question_mark.jpg";

const CourseInfo = [
    {
        id: 1,
        title: "Web Dev 1",
        price: 250,
        numClasses: 10,
        description:
            "Web Dev 1 is our recommended starter course for someone who is looking to try out coding. After completing this course, students will be able to create a fully-fledged website using HTML and CSS that will be accessible to anyone in the world! Students will also become familiar with development platforms like repl.it.",
        content: [
            "Introduction to how websites work",
            "Discuss what elements are",
            "How to display text on a webpage",
            "How to display lists",
            "How to display links",
            "How to add buttons",
            "How to display and manipulate images",
            "How to add tables to your website",
            "How to add forms",
            "An introduction to using divs",
            "The box model",
            "How to style your website",
            "How to add floats and clears",
        ],
        image: webdev,
        video: "https://www.youtube.com/watch?v=yOiZifoQ9_U",
        times: ["Monday, Thursday : 7-8pm", "Tuesday, Saturday : 6-7"],
        teachers: checker("Web Dev 1"),
    },
    {
        id: 2,
        title: "Web Dev 2",
        price: 400,
        numClasses: 16,
        description:
            "In Web Dev 2, students will learn the basics of vanilla JS and learn how to incorporate it with their previous websites. Students will also learn how to make their websites responsive using flexbox and media queries. Having experience with HTML or Java is required before beginning this course. It is highly recommended to take Web Dev 1 for those who have no experience.",
        content: [
            "What JavaScript is and why we use it",
            "Logging into the console",
            "Some best coding practices",
            "What data types are",
            "How to use variables",
            "How to get user input",
            "How to use if else statements",
            "How to use loops effectively",
            "Variable scopes",
            "How to use functions",
            "How to use arrays",
            "What objects are and how to use them",
            "What the DOM is",
            "How to select elements",
            "How to modify elements",
            "How to use event listeners",
        ],
        image: javascript,
        times: ["Tuesday, Saturday : 7-8pm"],
        video: "https://www.youtube.com/embed/Wu_jWLBqbHI",
        teachers: checker("Web Dev 2"),
    },
    {
        id: 3,
        title: "Java",
        numClasses: 12,
        price: 300,
        description:
            "In this course students will dive pretty extensively into developing with Java. It is structured around being a prep course for AP Computer Science Java which is available in most highschools. No prior coding experience is needed to take this course",
        content: [
            "What the structure of a Java program is",
            "What data types are and how we use them",
            "Using basic math in our programs",
            "How to use if/else statements",
            "How to get user input",
            "How to use loops in our code",
            "How to use arrays",
            "What methods are and why we use them",
            "How to effectively use classes",
        ],
        image: java,
        times: ["Wednesday, Saturday : 5-6pm"],
        video: "https://www.youtube.com/embed/o_myMSfOXFs",
        teachers: checker("Java"),
    },
    {
        id: 4,
        title: "Coming Soon...",
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
