document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carSelected = urlParams.get("car");

    const allCars = document.querySelectorAll(".CarBox");

    allCars.forEach(car => {
        if (car.dataset.car === carSelected) {
            car.classList.add("active");
        } else {
            car.style.display = "none"; // esconde os outros
        }
    });
});