{
    const moreFirstArticle = document.querySelector(".js-firstArticle");
    const moreSecondArticle = document.querySelector(".js-secondArticle");
    const readMoreFirstButton = document.querySelector(".js-firstButton");
    const readMoreSecondButton = document.querySelector(".js-secondButton");

    readMoreFirstButton.addEventListener("click", () => {
        if (readMoreFirstButton.innerText === "Pokaż więcej") {
            moreFirstArticle.classList.toggle("visible");
            readMoreFirstButton.innerText = "Pokaż mniej";
        } else {
            moreFirstArticle.classList.toggle("visible");
            readMoreFirstButton.innerText = "Pokaż więcej";
        }
    })

    readMoreSecondButton.addEventListener("click", () => {
        if (readMoreSecondButton.innerText === "Pokaż więcej") {
            moreSecondArticle.classList.toggle("visible");
            readMoreSecondButton.innerText = "Pokaż mniej";
        } else {
            moreSecondArticle.classList.toggle("visible");
            readMoreSecondButton.innerText = "Pokaż więcej";
        }
    })
}