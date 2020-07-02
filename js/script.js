let moreFirstArticle = document.querySelector(".js-firstArticle");
let moreSecondArticle = document.querySelector(".js-secondArticle");
let readMoreFirstButton = document.querySelector(".js-firstButton");
let readMoreSecondButton = document.querySelector(".js-secondButton");

readMoreFirstButton.addEventListener("click", () => {
    if(readMoreFirstButton.innerText === "Pokaż więcej") {
        moreFirstArticle.classList.toggle("visible");
        readMoreFirstButton.innerText = "Pokaż mniej";
    } else {
        moreFirstArticle.classList.toggle("visible");
        readMoreFirstButton.innerText = "Pokaż więcej";
    }
})

readMoreSecondButton.addEventListener("click", () => {
    if(readMoreSecondButton.innerText === "Pokaż więcej") {
        moreSecondArticle.classList.toggle("visible");
        readMoreSecondButton.innerText = "Pokaż mniej";
    } else {
        moreSecondArticle.classList.toggle("visible");
        readMoreSecondButton.innerText = "Pokaż więcej";
    }
})



