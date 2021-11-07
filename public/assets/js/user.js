function registerHandler(){
    const userSignup= document.querySelector('#userRegister')
    const pwReg= document.querySelector('#pwRegister')

    const response= fetch('/api/user', {
        method:"POST",
        body: JSON.stringify({
            username: userSignup.value,
            password: pwReg.value
        }),
        headers: { 'Content-Type': 'application/json' },

    })
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up');
      }
}
const btn= document.querySelector('#signup')
btn.addEventListener('submit', registerHandler)

function loginHandler(){
    const userLogin= document.querySelector('#userLogin')
    const userPw =document.querySelector('#userPW')

    const response= fetch('/api/user/login', {
        method: 'POST',
        body:JSON.stringify({
            username:userLogin.value,
            password:userPw.value
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to login');
      }
}

const loginBtn= document.querySelector('#login')
loginBtn.addEventListener('submit', loginHandler)