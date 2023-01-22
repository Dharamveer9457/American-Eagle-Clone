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


// ----------payement option---------------

let form = document.querySelector("form")

let cod=document.querySelector("#cod")
let cp=document.querySelector("#cp")
  

    form.addEventListener("submit", function(event){
        event.preventDefault()

        if(cod.checked){
            alert("Cash on Delivery is not available in your area")
            window.location.href = "payment.html"
        }else{

            let inputData = {
                name:form.name.value,
                number:form.cardNo.value,
                cvv:form.cardCvv.value
              }
          
              if(inputData.name==""||inputData.number==""||inputData.cvv==""){
                alert("Any of the Given fields are empty")
              }else{
                let otp = document.createElement("input")
                otp.placeholder = "4-Digit OTP NO."
                let orderplace = document.createElement("button")
                orderplace.textContent = "PLACE ORDER"

                orderplace.addEventListener("click",function(event){
                        event.preventDefault()

                        if(otp.value=="1234"){
                            alert("Order Placed Successfully")
                            window.location.href="thankyou.html"
                        }else{
                            alert("Wrong OTP")
                        }

                })
                form.append(otp,orderplace)
               
              }


        }

    })
