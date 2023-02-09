
let prodArr= JSON.parse(localStorage.getItem("cart-list")) || []
displaydata(prodArr)
var c=0;

function displaydata(arr){
//   console.log("hi")
    document.querySelector("#display-product").textContent=""
// console.log(arr)
arr.map(function(ele){
        var div = document.createElement("div")
        div.setAttribute("id","item")
        //left part
        let div1 = document.createElement("div")
    
        let div11 = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src",ele.image_url )
        img.setAttribute("id","img")
        
        // // descripton
        let div12 = document.createElement("div")
        let name = document.createElement("p")
        name.textContent = ele.title
        let price = document.createElement("p")
        let MRP = document.createElement("span")
        MRP.textContent ="MRP ₹"+  Number.parseFloat(ele.Q*Number.parseFloat(ele.mrp)).toFixed(2)
        MRP.setAttribute("id","prod-mrp")
        let sellprice = document.createElement("span")
        sellprice.textContent="₹"+ Number.parseFloat(ele.Q*Number.parseFloat(ele.offRate)).toFixed(2) +"*"
        console.log(sellprice.textContent)
        var off = document.createElement("span")
        off.textContent=ele.offer   ; off.setAttribute("class","off")
        let a = document.createElement("a")
        a.setAttribute("href",`https://pharmeasy.in/health-care/109/disinfectants-115?direction=1&sort=popularity`)
        // a.setAttribute("target","_blank")
       
        div11.append(img)
        price.append(MRP,off)
        div12.append(name,price,sellprice)
        div1.append(div11,div12)
        div.append(div1)
        a.append(div)
        document.querySelector("#display-product").append(a)
        
    })

}

let sortArr=[]
document.getElementById("filter-price").addEventListener("change",filterdata)
document.getElementById("price_filter").addEventListener("click",filterdata)
document.getElementById("price_filter-1").addEventListener("click",filterdata)
function filterdata(){
    console.log("heloo filter")
    let prodArr= JSON.parse(localStorage.getItem("cart-list")) || []
    let f_prodArr=prodArr
    let filtBy = document.getElementById("filter-price").value
    let price = document.getElementById("price_filter")
    let price1 = document.getElementById("price_filter-1")
    let off_1 = document.querySelector(".off").textContent
    
    
    if(price.checked){
        console.log("checked...")
        f_prodArr =f_prodArr.filter(function(ele){
            console.log(ele)
            return Number.parseFloat(ele.offRate)<=Number.parseInt(price.value)
        })
    }else{
        f_prodArr=prodArr
    }
      if(price1.checked){
        console.log("checked...")
        f_prodArr =f_prodArr.filter(function(ele){
            console.log(Number.parseFloat(ele.offRate)<=Number.parseInt(price1.value))
            return Number.parseFloat(ele.offRate)>=Number.parseInt(price1.value)
        })

    }
   
   if(filtBy=="L-H"){

        sortArr= f_prodArr.sort(function(a,b){
            return a.offRate - b.offRate
        })
        
        
    }else if(filtBy=="H-L"){
         sortArr= f_prodArr.sort(function(a,b){
            return b.offRate-a.offRate
        })
        
    }else if(filtBy=="Dis"){
         sortArr= f_prodArr.sort(function(a,b){
            

    let offa=""
    for(var i=0; i<(a.offer).length; i++){
        if(a.offer[i]!='%'&&a.offer[i]!='O'&&a.offer[i]!='F'){
            offa+=a.offer[i]
        }
    }
    let offb=""
    for(var i=0; i<(b.offer).length; i++){
        if(b.offer[i]!='%'&&b.offer[i]!='O'&&b.offer[i]!='F'){
            offb+=b.offer[i]
        }
    }
    console.log(offa,offb)
            return offb-offa
        })
         
    }
    
    if(filtBy==""){
        console.log("none")
        sortArr=f_prodArr.filter(function(ele){
            return true;
        })
    }

   

   
console.log(sortArr)
displaydata(sortArr)

}