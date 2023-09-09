// Add your code here
function submitData(userName, userEmail){
  return fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then((res)=>res.json())
  .then((objData)=>{
    const body = document.querySelector('body')
    body.textContent = objData.id
  })
  .catch((error)=>{
    const body = document.querySelector('body')
    body.textContent = error.message
  })
}