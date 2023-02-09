function showpopUp(){ 
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
    var data="Card-Number :- 12345678912345678, Date :- 12/24 , CVVnumber :- 123,  Name :- kamal verma";
    alert(data)
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}

document.querySelector("form").addEventListener("submit",onchance)

function onchance(){
    event.preventDefault();
    var num=1234567891234567,
    date=2412,
    cvv=123,
    name="kamalverma";

        var number=document.getElementById("number").value;
        var date=document.getElementById("date").value;
        var cvv=document.getElementById("cvv").value;
        var name=document.getElementById("name").value;
       if(number.length!=16){
        document.getElementById("nums").textContent="Invalid number!";
        var n=document.getElementById("nums");
        n.style.color="red"
        n.style.marginTop="2px"
       }else{
        // n.style.color=""
        document.getElementById("nums").textContent="";
       }

       if(date!=1224){
        document.getElementById("dates").textContent="Invalid date!!";
        var n=document.getElementById("dates");
        n.style.color="red"
        n.style.marginTop="2px"
       }

       if(cvv!=123){
        document.getElementById("cvvnum").textContent="Invalid CVV!";
        var n=document.getElementById("cvvnum");
        n.style.color="red"
        n.style.marginTop="2px"
       }

       if(name!="kamal verma"){
        document.getElementById("names").textContent="Invalid Name";
        var n=document.getElementById("names");
        n.style.color="red"
        n.style.marginTop="2px"
       }

       if(number.length==16&&date==1224&&cvv==123&&name=="kamal verma"){
        alert("Payment successfully Your Item has been deleverd soon!")
       }else{
        alert("Invalid detail")
       }

       document.getElementById("number").value="";
        document.getElementById("date").value="";
       document.getElementById("cvv").value="";
       document.getElementById("name").value="";

    // console.log(obj) 
    
    
}