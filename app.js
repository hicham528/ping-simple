let email_input=document.getElementById("email_input");
let submite_btn=document.getElementById("submite_btn");
let error=document.querySelector(".error")
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submite_btn.onclick=()=>{
  if(email_input.value=="" || !emailPattern.test(email_input.value)){
   error.innerHTML="Please enter a valid email address"
   email_input.style.border="3px solid red"
  }else{
    email_input.value="";
    error.style.display="none"
     email_input.style.border="3px solid green"
  }
}
