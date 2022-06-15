import { checker } from "./EmployeeChecker";
import webdev from "../images/webdev.jpg";
import javascript from "../images/js.png";
import dom from "../images/dom.png";
import java from "../images/java.png";
import comingSoon from "../images/question_mark.jpg";
import scratch from "../images/scratch-og.png";
const CourseInfo = [
    {
        id: 1,
        title: "Scratch Programming",
        price: 200,
        numClasses: 8,
        description:
            "In the Scratch Programming Course, students will learn how to create basic games using Scratch. This course is designed for elementary school students and focuses on gettting them familiar with the principles of computer science.",
        content: [
            "How to create sprites in Scratch",
            "Sprite movement",
            "Making Sprites reactive",
            "Conditionals in Scratch",
            "Making games with Scratch",
            "And much, much more!",
        ],
        image: scratch,
        video: "https://www.youtube.com/embed/ulAiiCDtp5U",
        times: ["Monday, Thursday : 10-11am", "Tuesday, Saturday : 4-5pm"],
        teachers: checker("Scratch"),
        madeFor: "elementary schoolers",
    },
    {
        id: 2,
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
        times: ["Monday, Thursday : 3-4pm", "Tuesday, Friday : 10-11AM"],
        teachers: checker("Web Dev 1"),
        madeFor: "middle schoolers",
    },
    {
        id: 3,
        title: "Intro to JavaScript",
        price: 200,
        numClasses: 8,
        description:
            "In our Intro to JavaScript course, students will learn the basics of JavaScript syntax. Having experience with HTML or Java is required before beginning this course. It is highly recommended to take Web Dev 1 for those who have no experience.",
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
        ],
        image: javascript,
        times: ["Monday, Thursday : 7-8pm"],
        video: "https://www.youtube.com/embed/e0-IRuJzqi0",
        teachers: checker("Web Dev 2"),
        madeFor: "middle schoolers",
    },
    {
        id: 4,
        title: "DOM Manipulation",
        price: 200,
        numClasses: 8,
        description:
            "In this course, students will use JavaScript to manipulate a webpage. Students will select elements and change how they look based on what the user does. It is mandatory to know JavaScript, HTML, and CSS.",
        content: [
            "What the DOM is",
            "How to select elements",
            "How to modify elements",
            "How to use event listeners",
        ],
        image: dom,
        times: ["Monday, Thursday : 7-8pm"],
        video: "https://www.youtube.com/embed/n7zQiipRY70",
        teachers: checker("DOM Manipulation"),
        madeFor: "middle schoolers",
    },
];

export default CourseInfo;
