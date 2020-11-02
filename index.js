

var share = document.querySelector(".js-share")
var extra = document.querySelector(".extra")
var michelle = document.querySelector(".michelle")


share.addEventListener('click', function(e) {
    if (extra.style.display === "none") {
        extra.style.display = "block"
    }
    else {
        extra.style.display = "none"
    }
})

var darkmode = document.querySelector(".js-darkmode")
var daymode = document.querySelector(".js-daymode")
var main = document.querySelector("#main")
var writings = document.querySelector(".writings")

darkmode.addEventListener('click', function(e) {
    
    if (writings.style.backgroundColor === "rgb(255, 255, 255)" && darkmode.style.color === "black") {
        writings.style.backgroundColor = "#000", darkmode.style.color = "white"
    } else {
        writings.style.backgroundColor = "rgb(255, 255, 255)", darkmode.style.color = "black"
    }
    if (main.style.backgroundColor === "rgb(233, 232, 232)") {
        main.style.backgroundColor = "#000"
    } else {
        main.style.backgroundColor = "rgb(233, 232, 232)"
    }
    
})