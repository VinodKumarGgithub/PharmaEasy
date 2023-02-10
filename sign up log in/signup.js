function showpopUp(){
    event.preventDefault();
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}


document.querySelector("form").addEventListener("submit",submitForm);
function submitForm(event){
  
    event.preventDefault();
    
    var num=document.getElementById("button").value;
    console.log(num)
    localStorage.setItem("login-data",num);
    // console.log(num)

    if(num.length==10){
        var userdata=JSON.parse(localStorage.getItem("user-data")) || [];
        var user =userdata.filter(function(elm,index){
            return elm.ph==num;
        })
        
        // window.location.href="sign up log in/OTP.html";
    }else{
        var tag=document.getElementById("ptag");
        tag.textContent="Invalid Number!";
        tag.style.textAlign="center"
        tag.style.color="red"
        tag.style.fontSize="20px"
    }
    document.getElementById("number").value=""
  }
