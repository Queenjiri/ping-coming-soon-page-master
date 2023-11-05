

let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("click", (e)=>{
e.preventDefault();

let email = document.getElementById("email");
let notify = "you will be notified shortly";

if(email.value === ""){
  console.log("inputfield cannot be empty");
console.log("Email cannot be empty");
} else{
 document.write(`${notify}`);
}

});





