

const delBtn= document.querySelector(".delPost")

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

delBtn.addEventListener("click", deletePost)