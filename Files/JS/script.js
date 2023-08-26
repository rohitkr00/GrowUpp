const imageUrls = [
    "./asset/Dictionary-pana 1.png",
    "./asset/Learning-cuate 1.png",
    "./asset/Learning-pana 2.png"
];

const animatedImage = document.getElementById("animatedImage");
const rectImages = document.querySelectorAll(".rect img");
const rect1Images = document.querySelectorAll(".rect1 img"); // Add rect1Images
let currentImageIndex = 0;

function changeImage() {
    animatedImage.src = imageUrls[currentImageIndex];

    // Manipulate the first rectangle (.rect)
    if (currentImageIndex === 1) {
        rectImages[0].parentElement.classList.add("animated-rectangle");
        rectImages[0].parentElement.classList.remove("rect");
    } else if (currentImageIndex === 2) {
        rectImages[0].parentElement.classList.remove("animated-rectangle");
        rectImages[0].parentElement.classList.add("animated-rectangle-third");
    } else {
        rectImages[0].parentElement.classList.remove("animated-rectangle");
        rectImages[0].parentElement.classList.remove("animated-rectangle-third");
        rectImages[0].parentElement.classList.add("rect");
    }

    // Manipulate the second rectangle (.rect1)
    if (currentImageIndex === 1) {
        rect1Images[0].parentElement.classList.add("animated-rectangle1");
        rect1Images[0].parentElement.classList.remove("rect1");
    } else if (currentImageIndex === 2) {
        rect1Images[0].parentElement.classList.remove("animated-rectangle1");
        rect1Images[0].parentElement.classList.add("animated-rectangle-third1");
    } else {
        rect1Images[0].parentElement.classList.remove("animated-rectangle1");
        rect1Images[0].parentElement.classList.remove("animated-rectangle-third1");
        rect1Images[0].parentElement.classList.add("rect1");
    }

    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

setInterval(changeImage, 1000);
//--------------------------------------------***//
const navToggleButton = document.getElementById("navToggleButton");
const headerMenu = document.querySelector(".header-menu");

navToggleButton.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
});

//************************************* */
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.getElementById("mobileMenuIcon");
    const headerMenu = document.getElementById("headerMenu");

    mobileMenuIcon.addEventListener("click", function () {
        headerMenu.classList.toggle("active");
    });

    // Close the menu when a menu item is clicked
    const headerMenuItems = headerMenu.querySelectorAll("li");
    headerMenuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            headerMenu.classList.remove("active");
        });
    });
});