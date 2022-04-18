const registerHandler = async ( event)=>{
  event.preventDefault();
    const username= document.querySelector('#userRegister')
    const password= document.querySelector('#pwRegister')
    console.log(userSignup.value, pwReg.value)

    if(username && password){
    const response=  await fetch('/api/user/', {
        method:"POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value
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
.querySelector()






