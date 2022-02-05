const hide = () => {
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    if (nav.classList !== "nav-active") {
        return;
    } else {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
        });
        burger.classList.toggle("toggle");
    }
};

export default hide;
