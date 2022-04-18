const loginHandler= async (e)=>{
    e.preventDefault()
    console.log("click");
  
      const userLogin= document.querySelector('#userLogin').value
      const userPw =document.querySelector('#userPW').value
    console.log(userLogin, userPw)
      const response=  await fetch('/api/user/login', {
          method: 'POST',
          body:JSON.stringify({
              username:userLogin,
              password:userPw
          }),
          headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to login');
        }
  }

document
.querySelector(".loginForm")
 .addEventListener("submit", loginHandler)