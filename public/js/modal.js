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

