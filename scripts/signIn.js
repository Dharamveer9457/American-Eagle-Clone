let form = document.querySelector("#signinform")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")

let loginicon = document.querySelector("#loginicon")

let login = document.querySelector("#loginbtn")

let usersData = JSON.parse(localStorage.getItem("signup-data"))||[]

login.addEventListener("click",function(event){
    event.preventDefault()

    usersData.forEach(el => {
        if(email.value==el.email && pass.value==el.password){
            alert("Login Successful")
          window.location.href = "index.html"
          loginicon.setAttribute("src" , "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png")
        console.log(loginicon.setAttribute)
        }else{
            alert("Wrong Credentials")
        }
    })
})

// -------------------SLIDESHOW ---------------------
var slideshowimages = [
    "./images/slide1.jpg",
    "./images/slide2.jpg",
    "./images/slide3.jpg"
]

let slideshow = document.querySelector("#slideshow")
let img1 = document.createElement("img")


window.addEventListener("load", function () {
    img1.src = slideshowimages[0]
    img1.style.width = "100%"
    img1.style.heigth="100px" 
    img1.style.objectFit = "fill"
    slideshow.appendChild(img1)

});
    let i=1;
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
