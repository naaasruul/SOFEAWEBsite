var today = new Date();

day = today.getDate()
month = today.getMonth()
year = today.getFullYear()% 100;

document.getElementById("day").innerHTML = day 
document.getElementById("month").innerHTML = month
document.getElementById("year").innerHTML = year 

// navbar scroll
const navbar = document.getElementById("navbar");
const scrollThreshold = 500; // Adjust this value to set when the background color should change

window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollThreshold) {
        navbar.setAttribute("style", "background-color: #1a748e;");
    } else {
        navbar.removeAttribute("style");
    }
});