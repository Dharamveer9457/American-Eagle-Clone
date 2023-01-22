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
        "https://s7d2.scene7.com/is/image/aeo/2370_8796_342_f?$cat-main_small$&fmt=webp",
        name: "AE Hey Baby Tee",
        category:"Tops",
        price: 12.52,
        
      },
      {
        image_url:
        "https://s7d2.scene7.com/is/image/aeo/0437_4024_987_ob?$cat-main_large$&fmt=webp",
        name: "AE Ripped waist Baggy jeans",
        category:"Jeans",
        price: 34.96,
      },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1399_7195_001_f?$cat-main_large$&fmt=webp",
    name: "AE Smacked Long-Sleeve",
    category:"Dresses",
    price: 65.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/3437_4312_857_ob?$cat-main_large$&fmt=webp",
    name: "AE Ripped High-Waist",
    category:"Bottoms",
    price: 59.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1457_1901_500_b?$cat-main_large$&fmt=webp",
    name: "AE Funday Sweatshirt",
    category:"Tops",
    price: 29.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0414_6022_026_b?$cat-main_large$&fmt=webp",
    name: "AE Snappy Shoes",
    category:"Shoes",
    price: 59.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0437_4335_540_ob?$cat-main_large$&fmt=webp",
    name: "AE Ripped Baggy Jeans",
    category:"Jeans",
    price: 59.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0461_4898_036_ob?$cat-main_large$&fmt=webp",
    name: "AE Dreammy Cargo",
    category:"Bottoms",
    price: 34.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1399_7195_600_ob?$cat-main_large$&fmt=webp",
    name: "AE Mini Dress",
    category:"Dresses",
    price: 52.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0437_4500_445_f?$cat-main_large$&fmt=webp",
    name: "AE Strigid Baggy jeans",
    category: "Jeans",
    price: 59.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/3375_8567_342_f?$cat-main_small$&fmt=webp",
    name: "AE Long-Sleeve Tee",
    category:"Tops",
    price: 29.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0322_4851_669_ob?$cat-main_large$&fmt=webp",
    name: "AE Straight-Fit Cargo",
    category:"Bottoms",
    price: 49.97,
  },
  
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/3375_8511_182_f?$cat-main_small$&fmt=webp",
    name: "AE Soft Pocket Tee",
    category:"Tops",
    price: 24.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1457_1901_200_of?$cat-main_large$&fmt=webp",
    name: "AE Hooded Flannel ",
    category:"Tops",
    price: 39.55,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/2433_4321_521_ob?$cat-main_large$&fmt=webp",
    name: "AE AirFex+ Skinny Jeans",
    category: "Jeans",
    price: 49.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0414_6026_309_b?$cat-main_large$&fmt=webp",
    name: "AE Leather Court Sneaker",
    category:"Shoes",
    price: 24.98,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1399_7130_815_ob?$cat-main_large$&fmt=webp",
    name: "AE Floral Mini Dress",
    category:"Dresses",
    price: 45.95,
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
    "https://s7d2.scene7.com/is/image/aeo/1438_4304_973_b?$cat-main_large$&fmt=webp",
    name: "AE77 Low-Rise Baggy jeans",
    category:"Jeans",
    price: 138.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0462_4765_676_ob?$cat-main_large$&fmt=webp",
    name: "AE Stretch Wide Leg Pant",
    category:"Bottoms",
    price: 59.95,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1537_8681_100_f?$cat-main_small$&fmt=webp",
    name: "AE Soft & Sexy Tee",
    category: "Tops",
    price: 19.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0437_4167_167_f?$cat-main_large$&fmt=webp",
    name: "AE Ripped Highest Waist jeans",
    category:"Jeans",
    price: 34.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/3375_8792_966_f?$cat-main_small$&fmt=webp",
    name: "AE Soft Pocket T-Shirt",
    category:"Tops",
    price: 25.46,
  },



  
  
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0414_6062_100_b?$cat-main_large$&fmt=webp",
    name: "AE Cuedo Code Sneaker",
    category:"Shoes",
    price: 24.45,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1537_8681_529_f?$cat-main_small$&fmt=webp",
    name: "AE Soft T-shirt",
    category:"Tops",
    price: 19.99,
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
    "https://s7d2.scene7.com/is/image/aeo/0395_7080_523_ob?$cat-main_large$&fmt=webp",
    name: "AE Super soft Shirt",
    category:"Dresses",
    price: 46.51,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0453_1892_001_ob?$cat-main_large$&fmt=webp",
    name: "AE Super Soft SweatShirt",
    category:"Tops",
    price: 37.52,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0414_5938_285_b?$cat-main_large$&fmt=webp",
    name: "AE Canvas Sneaker",
    category:"Shoes",
    price: 26.21,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1537_8681_300_f?$cat-main_small$&fmt=webp",
    name: "AE Soft V-neck Tee",
    category:"Tops",
    price: 20.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0327_4888_679_ob?$cat-main_large$&fmt=webp",
    name: "AE Temp Straight Jean",
    category:"Bottoms",
    price: 27.46,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0395_7035_106_ob?$cat-main_large$&fmt=webp",
    name: "AE Cut-out Mini Dress",
    category:"Dresses",
    price: 56.36,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1415_6115_001_b?$cat-main_large$&fmt=webp",
    name: "AE Platform Sandals",
    category:"Shoes",
    price: 34.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0437_4176_414_ob?$cat-main_large$&fmt=webp",
    name: "AE Low-Rise Straight jeans",
    category:"Jeans",
    price: 29.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1325_4852_200_ob?$cat-main_large$&fmt=webp",
    name: "AE Snappy Flare Pant",
    category: "Bottoms",
    price: 49.96,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1415_6080_210_b?$cat-main_large$&fmt=webp",
    name: "AE Slide Sandal",
    category:"Shoes",
    price: 39.55,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0122_3038_977_b?$cat-main_large$&fmt=webp",
    name: "AE77 loose Carpenter jeans",
    category:"Jeans",
    price: 138.52,
    
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/1399_7244_800_b?$cat-main_large$&fmt=webp",
    name: "AE Super Soft Fleece Dress",
    category:"Dresses",
    price: 37.52,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0453_1879_395_of?$cat-main_large$&fmt=webp",
    name: "AE Short Sleeve Hoodie",
    category:"Tops",
    price: 29.97,
  },
  {
    image_url:
    "https://s7d2.scene7.com/is/image/aeo/0437_4413_868_ob?$cat-main_large$&fmt=webp",
    name: "AE Dreamy Drape Jean",
    category:"Bottoms",
    price: 47.46,
  },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/1415_6092_296_b?$cat-main_large$&fmt=webp",
//     name: "AE Strappy Sandal",
//     category:"Shoes",
//     price: 36.36,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/2154_5937_613_ob?$cat-main_large$&fmt=webp",
//     name: "AE Super Soft Flannel",
//     category:"Shirts",
//     price: 16.55,
    
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/2154_5941_140_ob?$cat-main_large$&fmt=webp",
//     name: "AE Super Soft Shirts",
//     category: "Shirts",
//     price: 21.45,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0122_6428_947_f?$cat-main_large$&fmt=webp",
//     name: "AE AirFlex Patched Jeans",
//     category:"Jeans",
//     price: 44.97,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0213_7215_203_b?$cat-main_large$&fmt=webp",
//     name: "AE Chelsea Boot",
//     category:"Shoes",
//     price: 29.97,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0181_2839_063_ob?$cat-main_large$&fmt=webp",
//     name: "AE Good Vibes Tshirt",
//     category:"Tops",
//     price: 14.96,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0193_2018_001_ob?$cat-main_large$&fmt=webp",
//     name: "AE Zip-Up Hoodies",
//     category:"Tops",
//     price: 52.46,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0114_6375_445_of?$cat-main_large$&fmt=webp",
//     name: "AE Straight-Fit Trouser",
//     category:"Bottoms",
//     price: 49.97,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0166_2678_008_of?$cat-main_large$&fmt=webp",
//     name: "AE Hooded Flannel Shirt",
//     category:"Shirts",
//     price: 59.55,
    
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0114_6243_372_ob?$cat-main_large$&fmt=webp",
//     name: "AE AirFex+ Skinny Jeans",
//     category: "Jeans",
//     price: 49.95,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0213_7220_200_b?$cat-main_large$&fmt=webp",
//     name: "AE Leather Court Sneaker",
//     category:"Shoes",
//     price: 24.98,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0236_3135_100_ob?$cat-main_large$&fmt=webp",
//     name: "AE Heart Stretch Boxer",
//     category:"Underwear",
//     price: 15.95,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0193_2018_615_of?$cat-main_large$&fmt=webp",
//     name: "AE Bonfire Hoodie",
//     category:"Tops",
//     price: 56.55,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0116_6298_841_f?$cat-main_large$&fmt=webp",
//     name: "AE Slim Straight Jeans",
//     category:"Bottoms",
//     price: 26.55,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0236_2933_400_ob?$cat-main_large$&fmt=webp",
//     name: "AE Shadow Heart Boxer",
//     category:"Underwear",
//     price: 22.92,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0213_7391_100_b?$cat-main_large$&fmt=webp",
//     name: "AE Cuedo Code Sneaker",
//     category:"Shoes",
//     price: 24.45,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0114_6095_926_of?$cat-main_large$&fmt=webp",
//     name: "AE Twill Skinny Pant",
//     category: "Jeans",
//     price: 44.96,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0166_2585_006_ob?$cat-main_large$&fmt=webp",
//     name: "AE Super soft Shirt",
//     category:"Shirts",
//     price: 46.51,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0193_1981_309_ob?$cat-main_large$&fmt=webp",
//     name: "AE Super Soft Fleece Hoodie",
//     category:"Tops",
//     price: 37.52,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0213_7215_207_b?$cat-main_large$&fmt=webp",
//     name: "AE Canvas Slip-on Sneaker",
//     category:"Shoes",
//     price: 26.21,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/1115_6325_965_ob?$cat-main_large$&fmt=webp",
//     name: "AE Temp Straight Jean",
//     category:"Bottoms",
//     price: 27.46,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0213_7219_200_d1?$cat-main_large$&fmt=webp",
//     name: "AE Classic Lacup Boot",
//     category:"Shoes",
//     price: 36.36,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0114_6375_445_of?$cat-main_large$&fmt=webp",
//     name: "AE Patched Skinny Jeans",
//     category:"Jeans",
//     price: 34.97,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0193_1804_654_ob?$cat-main_large$&fmt=webp",
//     name: "AE Iconic Graphic Hoodie",
//     category: "Tops",
//     price: 49.96,
//   },
//   {
//     image_url:
//     "https://s7d2.scene7.com/is/image/aeo/0236_3010_001_ob?$cat-main_large$&fmt=webp",
//     name: "AE Mushroom Boxer",
//     category:"Underwear",
//     price: 16.55,
//   },
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
