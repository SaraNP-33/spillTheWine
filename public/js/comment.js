
const opinionBtn =document.querySelector("#opinionBtn")

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
opinionBtn.addEventListener("click", createComment)