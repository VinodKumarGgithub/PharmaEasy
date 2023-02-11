var bill = JSON.parse(localStorage.getItem("bill-list"))
displaydata()
document.getElementById("express-slot").addEventListener("click",expDel)
document.getElementById("normal-slot").addEventListener("click",displaydata)

function displaydata(){


console.log(bill)
document.getElementById("mrp").textContent ="₹"+ bill[0].mrp
document.getElementById("off").textContent ="₹"+ bill[0].off
document.getElementById("cart_value").textContent ="₹"+ bill[0].value
document.getElementById("delivery_charges").textContent ="₹"+ 29
document.getElementById("final_cost").textContent ="₹"+ (Number.parseFloat(bill[0].final)+29)


}

function expDel(){
    
        document.getElementById("delivery_charges").textContent ="₹"+( Number.parseInt(29)+Number.parseInt(15))
        console.log(document.getElementById("express-slot").value)

}
