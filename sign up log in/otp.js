

var inputs=document.querySelectorAll("input");
var button=document.querySelector("button");

function closepopUp(){
    document.querySelector(".overlay").classList.remove("overlay");
    document.querySelector(".login").classList.add("showlogin");
}

function showpopUp(){
    document.querySelector(".success").classList.add("showSuccess");
}

function closepopup(){
    document.querySelector(".success").classList.remove("showSuccess");
var otp=JSON.parse(localStorage.getItem("otp"));
var Userotp=JSON.parse(localStorage.getItem("userOTP"));
console.log(otp,Userotp)
    if(otp==Userotp){
        window.location.href = 'homepage.html';
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


var userNum=JSON.parse(localStorage.getItem("userNumber"));
document.getElementById("number").textContent=userNum;


document.querySelector("form").addEventListener("submit",formS);
var arr=[]
function formS(){
    event.preventDefault();
    var otp=1234;
    localStorage.setItem("otp",JSON.stringify(otp));
    var one=document.getElementById("Ist").value;
    var two=document.getElementById("Sec").value;
    var three=document.getElementById("Third").value;
    var four=document.getElementById("Fourth").value;
    var OTP=one+two+three+four;
    localStorage.setItem("userOTP",JSON.stringify(OTP))

    var getOtp=JSON.parse(localStorage.getItem("otp"));
    if(getOtp!=OTP){
        document.getElementById("htag").textContent="Invalid OTP!......."
    }
}





// if(one){
   
// }

