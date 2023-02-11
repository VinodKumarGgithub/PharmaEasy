document.querySelector("form").addEventListener("submit", signUp);
var arr = JSON.parse(localStorage.getItem("user-data")) || [];
function signUp(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
//   console.log(name,email,phone);
  if(phone.length!=10 ){
    alert("please enetr 10 digit phone number..!");
    return;
  }
  localStorage.setItem("login-data",phone)
  var obj = { name: name, mail: email, ph: phone };
  arr.push(obj);
  localStorage.setItem("user-data", JSON.stringify(arr));
  window.location.assign("/PharmaEasy/Index-page/index.html");
  document.getElementById("name").value="";
 document.getElementById("email").value="";
 document.getElementById("number").value="";
}