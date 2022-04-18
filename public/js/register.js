const registerHandler = async ( event)=>{
  event.preventDefault();
    const username= document.querySelector('#userRegister').value
    const password= document.querySelector('#pwRegister').value
    console.log(username.value, password.value)

    if(username && password){
    const response=  await fetch('/api/user/', {
        method:"POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: { 'Content-Type': 'application/json' },

    })
  
    if (response.ok) {
      console.log("it worked!")
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up');
      }
    }
}
document
.querySelector("#signUpForm")
.addEventListener("submit", registerHandler)






