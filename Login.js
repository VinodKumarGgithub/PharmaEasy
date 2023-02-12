function showpopUp(){
    event.preventDefault();
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}


document.querySelector("#form").addEventListener("submit",submitForm);

function submitForm(event){
    event.preventDefault();
    
    var num=document.getElementById("number").value;
    if(num.length==10){
        var userdata=JSON.parse(localStorage.getItem("user-data")) || [];
        if(userdata==""){
                alert("User not found please SignUp....! Redirecting to SignUp page")
                window.location.href="./signup.html";
                return;
        }
        var user =userdata.map(function(elm,index){
          
            if(elm.ph===num ){
                localStorage.setItem("login-data",num);
                 window.location.href="./OTP.html";
            }else{
                alert("User not found please SignUp....! Redirecting to SignUp page")
           
                window.location.href="./signup.html";
                return;
            }
        })
        
    }else{
        var tag=document.getElementById("ptag");
        tag.textContent="Invalid Number!";
        tag.style.textAlign="center"
        tag.style.color="red"
        tag.style.fontSize="20px"
    }
  }
