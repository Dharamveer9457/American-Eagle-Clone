let form =  document.querySelector("#signupform")

  let register = document.querySelector(".registerbtn")

let signupData = JSON.parse(localStorage.getItem("signup-data"))||[]

register.addEventListener("click",function(event){

    event.preventDefault()

    let credential = {
        firstname : form.firstname.value,
        lastname : form.lastname.value,
        email : form.email.value,
        phone : form.phone.value,
        password : form.password.value
    }
   if(firstname.value == "" || lastname.value=="" || email.value=="" || phone.value=="" || password.value==""){
    alert("Please fill all the details")
   }else{
    signupData.push(credential)
    localStorage.setItem("signup-data", JSON.stringify(signupData))
    alert("Sign Up Successful!! NEW ACCOUNT CREATED")
    window.location.href = "index.html"
   }
   
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
