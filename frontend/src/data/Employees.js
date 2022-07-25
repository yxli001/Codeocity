// import person from "../images/girl_with_better_computer.png";
import brian from "../images/brian_mason.jpg";
import yixuan from "../images/yixuan_li_2.JPG";
import colin from "../images/colin_frankel.png";
import ironcladdev from "../images/ironcladdev.png";
import scollier from "../images/scollier.jpg";
import sophie from "../images/sophie.jpg";

const employees = [
    {
        id: 1,
        name: "Brian Mason",
        roles: [
            "Co-founder",
            "Web Dev 1",
            "Intro to JavaScript",
            "Advanced CSS",
        ],
        description:
            "I am a sophomore at Walt Whitman Highschool and have been coding for about five years now. I began with website development and then diversified into other languages like Python, Java, and Kotlin! Outside of school, I enjoy playing tennis and am on the Whitman Varsity Tennis Team.",
        image: brian,
    },
    {
        id: 2,
        name: "Yixuan Li",
        roles: ["Co-founder", "Web Dev 1"],
        description:
            "I am a sophomore currently attending Montgomery Virtual Academy. I've been coding for about 4 years and have taught myself programming languages such as Java, Python, JavaScript, and Swift. ",
        image: yixuan,
    },
    {
        id: 3,
        name: "Colin Frankel",
        roles: ["Web Dev 1", "Intro to JavaScript"],
        description:
            "I am a Sophomore at Walt Whitman Highschool. I have been coding for about four years. I started with learning HTML and CSS and then later learned JavaScript to make content dynamic on my websites!",
        image: colin,
    },
    {
        id: 5,
        name: "Sam Collier",
        roles: ["DOM Manipulation"],
        description:
            "I am a 15 year old programmer who knows HTML, CSS, and JS, along with a bit of Java and C. I enjoy web development, programming games, and the liberal arts!",
        image: scollier,
    },
    {
        id: 5,
        name: "Sophie Hansen",
        roles: ["Scratch"],
        description:
            "I am a sophomore at Montgomery Blair High School who has been coding for about 4 years. Through school and at-home projects, I have learned Python, HTML, Java, and some JavaScript. Outside of school, I enjoy photography, art, and listening to music!",
        image: sophie,
    },
];

export default employees;
