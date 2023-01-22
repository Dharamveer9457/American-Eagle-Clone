// -------------------SLIDESHOW ---------------------
var slideshowimages = [
    "./images/slide1.jpg",
    "./images/slide2.jpg",
    "./images/slide3.jpg"
]

let slideshow = document.querySelector("#slideshow")
let img1 = document.createElement("img")


window.addEventListener("load", function () {
    img1.style.width = "100%"
    img1.style.heigth="100px" 
    img1.style.objectFit = "fill"
    slideshow.appendChild(img1)

});
    let i=0;
    setInterval(function(){
        img1.src = slideshowimages[i]
        img1.style.width = "100%"
        img1.style.heigth="100px"
        img1.style.objectFit = "fill"
         i++;
        if(i>=slideshowimages.length){
            i=0;
  }
        
        slideshow.appendChild(img1)
          }, 2000);


// --------WORKING OF  BUTTONS---------------

let shopmen = document.querySelector("#shopmen")

shopmen.addEventListener("click",function(event){
    window.location.href = "mensclothes.html"
})

let shopmen2 = document.querySelector("#men")

shopmen2.addEventListener("click",function(event){
    window.location.href = "mensclothes.html"
})

let shopwomen = document.querySelector("#shopwomen")

shopwomen.addEventListener("click",function(event){
    window.location.href = "womenclothes.html"
})

let shopmen3 = document.querySelector("#women")

shopmen3.addEventListener("click",function(event){
    window.location.href = "womenclothes.html"
})

