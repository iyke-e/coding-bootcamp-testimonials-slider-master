const displayImage = document.querySelector(".image");
const previousButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");
const testimonies = document.querySelectorAll(".testimony");

previousButton.addEventListener("click", () => {
    for (let i = 0; i < testimonies.length; i++) {

        if (testimonies[i].hidden === false) {
            testimonies[i].hidden = true;
            displayImage.style.backgroundImage = "url('images/image-tanya.jpg')";
        } else {
            testimonies[i].hidden = false;
            displayImage.style.backgroundImage = "url('images/image-john.jpg')";

        }

    }
})

nextButton.addEventListener("click", () => {
    for (let i = 0; i < testimonies.length; i++) {
        if (testimonies[i].hidden === false) {
            testimonies[i].hidden = true;
            displayImage.style.backgroundImage = "";

        } else {
            testimonies[i].hidden = false;
            displayImage.style.backgroundImage = "url('images/image-john.jpg')";
        }

    }
})