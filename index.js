



//profile update
if(localStorage.getItem("login-data")!=""){
  let temo_name=localStorage.getItem("login-data")
  var userdata=JSON.parse(localStorage.getItem("user-data")) || [];
  var user =userdata.map(function(elm,index){
      if(elm.ph==temo_name ){
       document.getElementById("name-display").textContent = elm.name;
        document.getElementById("profile-page").setAttribute("href","./profile.html")
      }
    })
    let cart = JSON.parse(localStorage.getItem("cart-list")) || ""
    if(cart.length!=0)
  document.getElementById("count-item").textContent= cart.length
  else
  document.getElementById("count-item").textContent= ""

}else{
 
  localStorage.setItem("login-data","")
}