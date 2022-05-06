
const opinionBtn =document.querySelector("#opinionBtn")
const commentIcon= document.querySelector("#commentIcon")
const opinionBox= document.querySelector("#opinionBox")
const hideBox = document.querySelector("#hideBox")
const comments= document.querySelector(".comments")

const toggleCommentSection= ()=>{
  opinionBox.classList.replace("invisible", "visible")
  comments.classList.add("invisible")
}
const hideCommentSection=()=>{
  opinionBox.classList.replace("visible","invisible")
  comments.classList.replace("invisible", "visible")
}

const createComment= async (event)=>{
    
    const body =document.querySelector('#commentBody').value
    const postId=document.querySelector("#postTitle").getAttribute("data-id")
  

    console.log(commentBody, postTitle);
    
    const response= await fetch(`/api/comment`,{
        method:"POST",
        body:JSON.stringify({
           body,
            postId

        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        window.location.reload();
        
      } else {
        alert('Failed to give opinion');
      }
}
commentIcon.addEventListener("click",toggleCommentSection)
hideBox.addEventListener("click", hideCommentSection)
opinionBtn.addEventListener("click", createComment)
