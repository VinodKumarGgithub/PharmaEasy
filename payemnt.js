function showpopUp(){ 
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".login").classList.add("showlogin");
    var data="Card-Number :- 123412341234, Date :- 12/24 , CVVnumber :- 123,  Name :- kamal verma";
    alert(data)
}

function closepopUp(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".login").classList.remove("showlogin");
}

document.querySelector("form").addEventListener("submit",onchance)

function onchance(){
    event.preventDefault();
    var num=123412341234,
    date="12/24",
    cvv=123,
    name="kamal verma";

        var number=document.getElementById("number").value;
        var date=document.getElementById("date").value;
        var cvv=document.getElementById("cvv").value;
        var name=document.getElementById("name").value;
       if(number.length!=12){
        document.getElementById("nums").textContent="Invalid number!";
        var n=document.getElementById("nums");
        n.style.color="red"
        n.style.marginTop="2px"
        return;
       }else{
        // n.style.color=""
        document.getElementById("nums").textContent="";
       }

       if(date!="12/24"){
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

       if(number.length==12&&date=="12/24"&&cvv==123&&name=="kamal verma"){
        alert(`"Payment successful ☺️", Your 📦 will be deliver soon...!⏳`)
        window.location.href="./index.html";
       }else{
        alert("Invalid detail ❗❗❗")
       }

       document.getElementById("number").value="";
        document.getElementById("date").value="";
       document.getElementById("cvv").value="";
       document.getElementById("name").value="";

    // console.log(obj) 




}

displaydata()

function displaydata(){
        // bill break-out
var billData=JSON.parse(localStorage.getItem("bill-list"))
var bill=[
    {
    mrp:100,
    off:20,
    value:80,
    final:80
}
]
console.log(billData)
// localStorage.setItem("bill-list",JSON.stringify( bill));
  billData.map(function(elm){
document.getElementById("mrp").textContent='₹'+elm.mrp;
document.getElementById("Discount").textContent='₹'+elm.off;
document.getElementById("cartValue").textContent='₹'+elm.value;
document.getElementById("amt").textContent='₹'+elm.final;
document.getElementById("total_save").textContent='₹'+elm.off;
})
}