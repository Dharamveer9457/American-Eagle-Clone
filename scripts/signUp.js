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
    alert("Sign Up Successful")
   }
   
})

