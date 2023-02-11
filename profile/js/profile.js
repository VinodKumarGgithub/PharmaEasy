let user_data = JSON.parse(localStorage.getItem("user-data")) || []
 console.log(user_data,user_data == "")
 if(user_data !="")
  displaydata()



function displaydata(){
    let login_data = JSON.parse(localStorage.getItem("login-data")) || ""
    let user_data = JSON.parse(localStorage.getItem("user-data")) || []
  if(login_data!=""){

   let user = user_data.filter(function(ele){
    return ele.ph == login_data
    })

    document.querySelector("#n").value =user[0].name 
    document.getElementById("number").value = user[0].ph
    document.getElementById("mail").value = user[0].mail
  }
  
  var user_number = localStorage.getItem("login-data")
  var userArr =JSON.parse(localStorage.getItem("user-data"))

  userArr.map(function(ele,index){
  
  if(ele.ph == user_number ){
  document.getElementById("name-display").textContent = ele.name;
  let name = document.getElementById("name").textContent = ele.name ;
  }
  // document.getElementById("name-l").textContent = ele.name[0] ;
  })
}


//user details update part
document.querySelector("form").addEventListener("submit",update)

function update(){
 event.preventDefault();
    
 let login_data = JSON.parse(localStorage.getItem("login-data")) || ""
 var userr = JSON.parse(localStorage.getItem("user-data")) || []
 let user = userr.map(function(ele,index){
 let name = document.querySelector("#n").value 
 let mail = document.getElementById("mail").value
    if(login_data == ele.ph && name!=""&&mail!=""&&(name!=userr[index].name || mail!=userr[index].mail) ){
      console.log(name,mail)
    userr[index].name =  name
    userr[index].mail =  mail
    localStorage.setItem("user-data",JSON.stringify(userr))
    alert("Profile updated successfully...!")
  
    displaydata()
    }else{
      alert("no changes")
      
    }
    })
   
}
let name = document.querySelector("#n").value 
let mail = document.getElementById("mail").value
document.querySelector("form").addEventListener("submit",update)
var userr = JSON.parse(localStorage.getItem("user-data")) || []
if(userr ==""){
  let name = document.querySelector("#n").value 
  let mail = document.getElementById("mail").value
  console.log(name,mail)


}else{
  console.log(userr)
}

document.getElementById("log-out").addEventListener("click",logOut)

function logOut(){
  let ph_number = JSON.parse(localStorage.getItem("login-data")) || []
  let search = JSON.parse(localStorage.getItem("user-data")) || []
  let cart_data = JSON.parse(localStorage.getItem("cart-list")) || []
  let userr = search.map(function(ele){
  //  if( ph_number == ele.ph){
  //   alert(ph_number,ele.ph)
    
    
  //  }
  } )
  
  // localStorage.setItem("user-data",JSON.stringify(search))
   localStorage.setItem("status",false)
  localStorage.setItem("login-data","")
  alert("Logged Out Successfully")
 document.getElementById("log-out").addEventListener("href","/PharmaEasy/Index-page/index.html")
}
