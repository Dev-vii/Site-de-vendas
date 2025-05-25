//DÚVIDAS
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carSelected = urlParams.get("car"); // faz o código enteder que cada div tem um conteúdo diferente e as nomeia diferente

    //ENTENDI
    const allCars = document.querySelectorAll(".CarBox"); // seleciona todos os carros


    allCars.forEach(car => { // roda uma função para cada carro da tela
        if (car.dataset.car === carSelected) { //Se o carro clicado tiver as info corretas, ele mostra os detalhes
            car.classList.add("active");
        }
    });

    // MUDAR AS IMAGENS DO PRODUTO
    const otherPhotos = document.querySelectorAll(".ModelOp");

    otherPhotos.forEach(photo => {
        photo.addEventListener("click", () => {
            const carBox = photo.closest(".CarBox");
            const mainImg = carBox.querySelector("[data-main]"); //variável recebe o carro com "data-main" (principal)
            mainImg.src = photo.src; //parte da função que troca a foto do principal pela foto da box
        });
    });

});