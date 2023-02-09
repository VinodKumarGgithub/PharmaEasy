function showpopUp(){
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}
// document.querySelector("form").addEventListener("submit",clickBtn)
//     function clickBtn(){
//         event.preventDefault();
//         window.location.assign("OTP.html");
//     }

// document.querySelector("form").addEventListener("submit",sendOtp);
// function sendOtp(){
//     var data=document.getElementById("data").value;
//     // console.log(data)
// }


document.querySelector("form").addEventListener("submit",submitForm);
function submitForm(){
    event.preventDefault();
    var num=document.getElementById("number").value;
    localStorage.setItem("login-data",num);

    if(num.length===10){
        window.location.assign("OTP.html");
    }else{
        var tag=document.getElementById("ptag");
        tag.textContent="Invalid Number!";
        tag.style.textAlign="center"
        tag.style.color="red"
        tag.style.fontSize="20px"
    }
    document.getElementById("number").value=""
  }
