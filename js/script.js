const CarouselContainer = document.getElementById("my-carousel-container");


// Creo un Array con le immagini all'interno

ImgArray = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];



// Creo un ciclo for dove per ogni immagine nell'array la aggiungo in pagina 

let i = 0;
 for (let contatore = 0; contatore < ImgArray.length; contatore++) {
    console.log ("numero", ImgArray[contatore]);

    if (contatore == 0) {
        CarouselContainer.innerHTML += `
        <div class="item active">
            <img src="${ImgArray[contatore]}" alt="">
        </div>`
    }

    else {
        CarouselContainer.innerHTML += `
        <div class="item">
            <img src="${ImgArray[contatore]}" alt="">
        </div>`
    }


 }

