document.querySelector("form").addEventListener("submit", signUp);
var arr = JSON.parse(localStorage.getItem("user-data")) || [];
function signUp(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
//   console.log(name,email,phone);
  if(phone.length!=10 ){
    alert(`"please enter 10 digit phone number"`);
    return;
  }
let user_data = JSON.parse(localStorage.getItem("user-data")) || []
let c=0;
user_data.map(function(ele){
  if(ele.ph == phone){
   c=1;
   return;
  }

})
if(c==1){
  alert(`"User is Already registred ,Please try to login"`)
return;
}
  localStorage.setItem("login-data",phone)
  var obj = { name: name, mail: email, ph: phone };
  arr.push(obj);
  localStorage.setItem("user-data", JSON.stringify(arr));
  window.location.assign("./index.html");
  document.getElementById("name").value="";
 document.getElementById("email").value="";
 document.getElementById("number").value="";
}