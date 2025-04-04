    //DÚVIDAS
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carSelected = urlParams.get("car"); // faz o código enteder que cada div tem um conteúdo diferente e as nomeia diferente

    //ENTENDI
    const allCars = document.querySelectorAll(".CarBox"); // seleciona todos os carros

    allCars.forEach(car => { // roda uma função para cada carro da tela
        if (car.dataset.car === carSelected) { //Se o carro clicado tiver as info corretas, ele aparece, se não, some
            car.classList.add("active");
        }
    });
});