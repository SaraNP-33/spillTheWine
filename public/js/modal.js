const newbtn= document.querySelector("#new")
const modal= document.querySelector(".modal")
const xModal= document.querySelector("#closeModal")
const cancel= document.querySelector("#cancel")

function openModal(){
    modal.classList.add("is-active")
}
function closeModal(){
    modal.classList.remove("is-active")
}

newbtn.addEventListener("click", openModal)
cancel.addEventListener("click", closeModal)
xModal.addEventListener("click", closeModal)

// fetch for new post

const newPostFormHandler = async ()=>{
    const title= document.querySelector("#newPostTitle").value
    const content=document.querySelector("#newPostText").value
    console.log(title, content)

    const response= await fetch("/api/post",{
        method: 'POST',
        body:JSON.stringify({
           title: title,
            content:content
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if(response.ok){
        closeModal()
        window.location.reload()
    }else{
        alert("oops! Something went wrong")
    }

}

const savebtn= document.querySelector("#savePost")

savebtn.addEventListener("click", newPostFormHandler)