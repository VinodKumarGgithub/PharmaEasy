var bill = JSON.parse(localStorage.getItem("bill-list"))

displaydata()

function displaydata(){



document.getElementById("mrp").textContent ="₹"+ bill.mrp
document.getElementById("off").textContent ="₹"+ bill.off
document.getElementById("cart_value").textContent ="₹"+ bill.value
document.getElementById("delivery_charges").textContent ="₹"+ 29
document.getElementById("final_cost").textContent ="₹"+ (Number.parseFloat(bill.final)+29)


}
