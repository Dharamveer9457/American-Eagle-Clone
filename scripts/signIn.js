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

