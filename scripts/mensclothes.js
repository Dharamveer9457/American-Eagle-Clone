let container=document.querySelector("#productcontainer")


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
  
//  --------------PRODUCTS-------------

   let productData = [
{
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2151_5905_020_of?$cat-main_large$&fmt=jpeg&defaultImage=2151_5905_020_f",
    name: "AE Super Soft Flannel",
    category:"Shirts",
    price: 16.55,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2151_5898_615_ob?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Shirts",
    category: "Shirts",
    price: 21.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0119_6413_469_f?$cat-main_large$&fmt=webp",
    name: "AE AirFlex Patched Jeans",
    category:"Jeans",
    price: 44.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7215_064_d1?$cat-main_large$&fmt=webp",
    name: "AE Chelsea Boot",
    category:"Shoes",
    price: 29.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0181_2839_300_ob?$cat-main_large$&fmt=webp",
    name: "AE Good Vibes Tshirt",
    category:"Tops",
    price: 14.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0196_1891_064_f?$cat-main_large$&fmt=webp",
    name: "AE Zip-Up Hoodies",
    category:"Tops",
    price: 52.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0116_6020_272_ob?$cat-main_large$&fmt=webp",
    name: "AE Straight-Fit Trouser",
    category:"Bottoms",
    price: 49.97,
  },



  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2153_5910_400_f?$cat-main_large$&fmt=webp",
    name: "AE Hooded Flannel Shirt",
    category:"Shirts",
    price: 59.55,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0119_5339_001_ob?$cat-main_large$&fmt=webp",
    name: "AE AirFex+ Skinny Jeans",
    category: "Jeans",
    price: 49.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7327_410_d1?$cat-main_large$&fmt=webp",
    name: "AE Leather Court Sneaker",
    category:"Shoes",
    price: 24.98,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0220_2905_100_f?$cat-main_large$&fmt=webp",
    name: "AE Heart Stretch Boxer",
    category:"Underwear",
    price: 15.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_2039_027_f?$cat-main_large$&fmt=webp",
    name: "AE Bonfire Hoodie",
    category:"Tops",
    price: 56.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0116_6298_841_f?$cat-main_large$&fmt=webp",
    name: "AE Slim Straight Jeans",
    category:"Bottoms",
    price: 26.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0235_2904_600_f?$cat-main_large$&fmt=webp",
    name: "AE Shadow Heart Boxer",
    category:"Underwear",
    price: 22.92,
  },



  
  
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7394_523_d1?$cat-main_large$&fmt=webp",
    name: "AE Cuedo Code Sneaker",
    category:"Shoes",
    price: 24.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0121_4549_204_f?$cat-main_large$&fmt=webp",
    name: "AE Twill Skinny Pant",
    category: "Jeans",
    price: 44.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2153_5907_106_ob?$cat-main_large$&fmt=webp",
    name: "AE Super soft Shirt",
    category:"Shirts",
    price: 46.51,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_1991_410_f?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Fleece Hoodie",
    category:"Tops",
    price: 37.52,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7389_064_d1?$cat-main_large$&fmt=webp",
    name: "AE Canvas Slip-on Sneaker",
    category:"Shoes",
    price: 26.21,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1115_6325_965_ob?$cat-main_large$&fmt=webp",
    name: "AE Temp Straight Jean",
    category:"Bottoms",
    price: 27.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7219_200_d1?$cat-main_large$&fmt=webp",
    name: "AE Classic Lacup Boot",
    category:"Shoes",
    price: 36.36,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0119_6290_120_f?$cat-main_large$&fmt=webp",
    name: "AE Patched Skinny Jeans",
    category:"Jeans",
    price: 34.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_1804_604_ob?$cat-main_large$&fmt=webp",
    name: "AE Iconic Graphic Hoodie",
    category: "Tops",
    price: 49.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/3232_3084_001_f?$cat-main_large$&fmt=webp",
    name: "AE Glossy Heart Boxer",
    category:"Underwear",
    price: 16.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_1991_410_f?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Fleece Hoodie",
    category:"Tops",
    price: 37.52,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7389_064_d1?$cat-main_large$&fmt=webp",
    name: "AE Canvas Slip-on Sneaker",
    category:"Shoes",
    price: 26.21,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1115_6325_965_ob?$cat-main_large$&fmt=webp",
    name: "AE Temp Straight Jean",
    category:"Bottoms",
    price: 27.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7219_200_d1?$cat-main_large$&fmt=webp",
    name: "AE Classic Lacup Boot",
    category:"Shoes",
    price: 36.36,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2154_5937_613_ob?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Flannel",
    category:"Shirts",
    price: 16.55,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2154_5941_140_ob?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Shirts",
    category: "Shirts",
    price: 21.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0122_6428_947_f?$cat-main_large$&fmt=webp",
    name: "AE AirFlex Patched Jeans",
    category:"Jeans",
    price: 44.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7215_203_b?$cat-main_large$&fmt=webp",
    name: "AE Chelsea Boot",
    category:"Shoes",
    price: 29.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0181_2839_063_ob?$cat-main_large$&fmt=webp",
    name: "AE Good Vibes Tshirt",
    category:"Tops",
    price: 14.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_2018_001_ob?$cat-main_large$&fmt=webp",
    name: "AE Zip-Up Hoodies",
    category:"Tops",
    price: 52.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0114_6375_445_of?$cat-main_large$&fmt=webp",
    name: "AE Straight-Fit Trouser",
    category:"Bottoms",
    price: 49.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0166_2678_008_of?$cat-main_large$&fmt=webp",
    name: "AE Hooded Flannel Shirt",
    category:"Shirts",
    price: 59.55,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0114_6243_372_ob?$cat-main_large$&fmt=webp",
    name: "AE AirFex+ Skinny Jeans",
    category: "Jeans",
    price: 49.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7220_200_b?$cat-main_large$&fmt=webp",
    name: "AE Leather Court Sneaker",
    category:"Shoes",
    price: 24.98,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0236_3135_100_ob?$cat-main_large$&fmt=webp",
    name: "AE Heart Stretch Boxer",
    category:"Underwear",
    price: 15.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_2018_615_of?$cat-main_large$&fmt=webp",
    name: "AE Bonfire Hoodie",
    category:"Tops",
    price: 56.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0116_6298_841_f?$cat-main_large$&fmt=webp",
    name: "AE Slim Straight Jeans",
    category:"Bottoms",
    price: 26.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0236_2933_400_ob?$cat-main_large$&fmt=webp",
    name: "AE Shadow Heart Boxer",
    category:"Underwear",
    price: 22.92,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7391_100_b?$cat-main_large$&fmt=webp",
    name: "AE Cuedo Code Sneaker",
    category:"Shoes",
    price: 24.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0114_6095_926_of?$cat-main_large$&fmt=webp",
    name: "AE Twill Skinny Pant",
    category: "Jeans",
    price: 44.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0166_2585_006_ob?$cat-main_large$&fmt=webp",
    name: "AE Super soft Shirt",
    category:"Shirts",
    price: 46.51,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_1981_309_ob?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Fleece Hoodie",
    category:"Tops",
    price: 37.52,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7215_207_b?$cat-main_large$&fmt=webp",
    name: "AE Canvas Slip-on Sneaker",
    category:"Shoes",
    price: 26.21,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1115_6325_965_ob?$cat-main_large$&fmt=webp",
    name: "AE Temp Straight Jean",
    category:"Bottoms",
    price: 27.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0213_7219_200_d1?$cat-main_large$&fmt=webp",
    name: "AE Classic Lacup Boot",
    category:"Shoes",
    price: 36.36,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0114_6375_445_of?$cat-main_large$&fmt=webp",
    name: "AE Patched Skinny Jeans",
    category:"Jeans",
    price: 34.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0193_1804_654_ob?$cat-main_large$&fmt=webp",
    name: "AE Iconic Graphic Hoodie",
    category: "Tops",
    price: 49.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0236_3010_001_ob?$cat-main_large$&fmt=webp",
    name: "AE Mushroom Boxer",
    category:"Underwear",
    price: 16.55,
  },
]



// -------------Filter--------------

let filterby = document.getElementById("filter")

filterby.addEventListener("change",()=>{
  
  if(filterby.value === ""){
    let filteredarr = productData
      displayData(filteredarr)
    }else{
     let filteredData = productData.filter(function(el){
        return el.category == filterby.value
       
      })
     displayData(filteredData)
    }

  })

  // --------------Sort-------------------
 let sortby = document.getElementById("sort")

 sortby.addEventListener("change",function(event){


  if(sortby.value == ""){
    displayData(productData)
  }else if(sortby.value == "asc"){
    productData.sort(function(a,b){
      return a.price - b.price
    })
    displayData(productData)
  }else if(sortby.value == "desc"){
    productData.sort(function(a,b){
      return b.price - a.price
    })
    displayData(productData)
  }
 })

 
let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

function displayData(productData){

  container.innerHTML = null

  productData.forEach(function(el){
    let card = document.createElement("div")
      card.setAttribute("id","card")
      let image = document.createElement("img")
      let name = document.createElement("h3")
      let category = document.createElement("p")
      let price = document.createElement("h4")
      price.style.color = "green"
      price.style.fontSize = "20px"
      let rating = document.createElement("p")
      let space = document.createElement("br")
      let cartBtn = document.createElement("button")

      image.src = el.image_url,
      name.textContent = el.name,
      category.textContent = el.category,
      price.textContent = "$"+el.price,
      rating.textContent = "★★★★★"
      rating.style.color = "gold"
      rating.style.fontSize = "20px"
      cartBtn.textContent = "Add To Cart"
      
      

      cartBtn.addEventListener("click",function(){
      
        if(checkDuplicate(el)){
            alert("Product Already in Cart")
            }else{
            CartArr.push({...el,quantity:1})
            localStorage.setItem("cart",JSON.stringify(CartArr))
            alert("Product Added To Cart")
            }

    })

      card.append(image,name,category,price,rating,space,cartBtn)
      container.append(card)

    })
  }
  displayData(productData)
  
   



    function checkDuplicate(product){
        for(let i=0;i<CartArr.length;i++){
          if(CartArr[i].name===product.name){
            return true
          }
        }
        return false
      }
