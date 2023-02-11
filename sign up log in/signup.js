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
    localStorage.setItem("user-number",num)

    if(num.length==10){
        var userdata=JSON.parse(localStorage.getItem("user-data")) || [];
        var user =userdata.map(function(elm,index){
            if(elm.ph==num ){
        // document.getElementById("name-display").textContent = elm.name;
        console.log(elm.name)
        // document.getElementById("profile-page").setAttribute("href","/PharmaEasy/profile/profile.html")
        localStorage.setItem("user-number",num);
       window.location.href="/PharmaEasy/sign up log in/OTP.html";
       

    //    document.getElementById("otp-red").setAttribute("href","/PharmaEasy/sign up log in/OTP.html")
      

            }
        })
        
    }else{
        var tag=document.getElementById("ptag");
        tag.textContent="Invalid Number!";
        tag.style.textAlign="center"
        tag.style.color="red"
        tag.style.fontSize="20px"
        if(user == undefined){
            alert("User not found please SignUp....! Redirecting to SignUp page")
           
            window.location.href="/PharmaEasy/Index-page/signup page/signup.html";
        }
        // 
    }
    document.getElementById("number").value=""
  }
