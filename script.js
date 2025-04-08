
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-links ul li a");

    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#444"; 
        } else {
            nav.style.backgroundColor = "#333"; 
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "red"; // Change font color on hover
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "white"; // Reset font color on mouse leave
        });
    });
});
