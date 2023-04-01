
function submitData(userName,userEmail){
 
const object={ name: userName, email: userEmail,}

const config={
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body: JSON.stringify(object),
}

   return fetch("http://localhost:3000/users",config)
   .then((resp => resp.json()))
      .then((data => document.body.innerHTML+=(`<p>${data.id}</p>`)))
         .catch((error => document.body.innerHTML+=(`<p>${error.message}</p>`)))

}


console.log(submitData("Samuel","Email"));


