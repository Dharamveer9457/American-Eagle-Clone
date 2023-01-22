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



// ---------CART ITEM---------

let Cart = JSON.parse(localStorage.getItem("cart"))||[];
    let Container = document.getElementById("cartitem");
    
    function ecommerceData(data) {
     
      Container.innerHTML = "";
      Cart.forEach((el) => {
        let card = document.createElement("div");
        card.setAttribute("id","card")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let quantity = document.createElement("span");
        quantity.setAttribute("id","quantity")
        let price = document.createElement("h4");
        price.style.color = "green"
        price.style.fontSize = "20px"
        let Remove = document.createElement("button");
        Remove.setAttribute("id","remove")
        let Increment = document.createElement("button");
        Increment.setAttribute("id","increase")
        let Decrement = document.createElement("button");
        Decrement.setAttribute("id","decrease")
        let line = document.createElement("hr")
        quantity.textContent=el.quantity
        Remove.textContent = "Remove";
    
        Increment.textContent="+"
        Decrement.textContent="-"
        image.src = el.image_url;
        name.textContent = el.name;
        category.textContent = el.category;
        price.textContent = el.price;
        
        Remove.addEventListener("click", () => {
            Cart=Cart.filter((ele)=>{
              return ele.name!==el.name
            })
            localStorage.setItem("cart",JSON.stringify(Cart))
            ecommerceData()
        });
        Increment.addEventListener("click", () => {
          el=el.quantity++
          localStorage.setItem("cart",JSON.stringify(Cart))
          ecommerceData()
        });
        Decrement.addEventListener("click", () => {
          if(el.quantity>1){
            el=el.quantity--
          localStorage.setItem("cart",JSON.stringify(Cart))
          ecommerceData()
          }
        });
        card.append(image, name, price, category, line, Increment, quantity,Decrement,Remove);
        Container.append(card);
      });
      let totalamount= document.querySelector("#totalamount")
      let payableamount= document.querySelector("#payableamount>span")
      let deliverycharge = document.querySelector("#deliverycharge")
      let items = document.querySelector("#items")
      
      let count=0;
      for(let i=0;i<Cart.length ; i++){
        count+=Cart[i].quantity
      }
      items.textContent = count

      let sum=0
      for(let i=0;i<Cart.length;i++){
        sum+=Cart[i].price*Cart[i].quantity
      }
   totalamount.textContent=sum
   payableamount.textContent=Math.floor(Number(totalamount.textContent) + Number(deliverycharge.textContent))
    

   
    }
    ecommerceData()

    let placeorder = document.querySelector("#placeorder")

    let name=document.querySelector("#name")
    let mobile=document.querySelector("#mobile")
    let house=document.querySelector("#house")
    let town=document.querySelector("#town")
    let city=document.querySelector("#city")
    let landmark = document.querySelector("#landmark")
    let pin=document.querySelector("#pin")

    placeorder.addEventListener("click", function(event){
        
        event.preventDefault()

        if(name.value=="" || mobile.value=="" || house.value==""|| town.value==""|| city.value==""|| landmark.value==""|| pin.value==""){
            alert("Please fill all details")
        }else{
            window.location.href = "payment.html"
        }
    })