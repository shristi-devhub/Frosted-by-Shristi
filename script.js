window.onload = function () {
    alert("🎂 Welcome to Frosted by Shristi! Enjoy our delicious cakes.");
};
document.addEventListener("DOMContentLoaded", function () {
const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
const darkBtn = document.getElementById("darkModeButton");
    if (darkBtn) {
        darkBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
function filterCake(category) {
    let cakes = document.querySelectorAll(".cake");

    cakes.forEach(function (cake) {
        if (category === "all") {
            cake.style.display = "block";
        } else if (cake.classList.contains(category)) {
            cake.style.display = "block";
        } else {
            cake.style.display = "none";
        }
    });
}