
var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);

alert(`Your 4 Digit OTP is "${val}"`)

var userNum=JSON.parse(localStorage.getItem("user-number"));
document.getElementById("number_or").textContent="+91 "+ userNum;


var inputs=document.querySelectorAll("input");
var button=document.querySelector("button");

function closepopUp(){
    document.querySelector(".overlay").classList.remove("overlay");
    document.querySelector(".login").classList.add("showlogin");
}

// function showpopUp(){
//     document.querySelector(".success").classList.add("showSuccess");
// }

function closepopup(){
    document.querySelector(".success").classList.remove("showSuccess");
var otp=JSON.parse(localStorage.getItem("otp"));
var no =JSON.parse(localStorage.getItem("user-number"));
    if(otp==val){
        let num =JSON.parse(localStorage.getItem("login-data")) || ""
           
    }
}

inputs.forEach((input,index1)=>{
    input.addEventListener("keyup",(e)=>{

        var currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        if(currentInput.value.length >1){
            currentInput.value = ""; 
            return;
        }

        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if(e.key === "Backspace"){
            inputs.forEach((input,index2)=>{
                if(index1 <= index2 && prevInput){
                    input.setAttribute("disabled",true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            })
        }
    });
});

window.addEventListener("load",()=>inputs[0].focus());





document.querySelector("#form-otp").addEventListener("submit",formS);
var arr=[]
function formS(event){
    event.preventDefault();
    var otp=val;
    let verify = localStorage.getItem("status") || false
    console.log(otp,val)
    localStorage.setItem("otp",JSON.stringify(otp));
    var one=document.getElementById("Ist").value;
    var two=document.getElementById("Sec").value;
    var three=document.getElementById("Third").value;
    var four=document.getElementById("Fourth").value;
    var OTP=one+two+three+four;
    // localStorage.setItem("userOTP",JSON.stringify(OTP))


    var getOtp=JSON.parse(localStorage.getItem("otp"));
    if(val!=OTP){
        document.querySelector(".success").textContent=""
        localStorage.setItem("status",false)
        localStorage.setItem("login-data","")
        alert(`Invalid...!, Your 4 Digit OTP is "${val}"`)
        return
    }else{
       let verify = localStorage.getItem("user-number")
       localStorage.setItem("login-data",verify)
     localStorage.setItem("status",true)
     window.location.assign("./index.html");
     
    }
}






