

const delBtn= document.querySelector(".delPost")
const upBtn =document.querySelector(".upPost")


const updatePost= async (event)=>{
    const upTitle= document.querySelector('#upTitle').value
    const upBody =document.querySelector('#upBody').value

    const id=event.target.getAttribute("data-id")
    const response= await fetch(`/api/post/${id}`,{
        method:"PUT",
        body:JSON.stringify({
            title:upTitle,
            body:upBody
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard');
        alert("Your Post was sucessfully updated!")
      } else {
        alert('Failed to login');
      }
}

const deletePost= async (event)=>{
    const id=event.target.getAttribute("data-id")
    console.log("click", id)

    const response= await fetch(`/api/post/${id}`,{
        method:"DELETE"
    })
    if(response.ok){
        window.location.assign("/dashboard")
        alert("Your Post was sucessfully deleted!")

    }else{
        alert("This post just won't quit")
    }
}

upBtn.addEventListener("click", updatePost)
delBtn.addEventListener("click", deletePost)