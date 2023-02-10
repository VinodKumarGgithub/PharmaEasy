var cartArr = JSON.parse(localStorage.getItem("cart-list")) || []
displaycart();

function displaycart(){

  //left part
   let cart_value=0; let MRP_total = 0;
   let delivery = document.querySelector("#delivery-adress")
  let cart_empty = document.querySelector("#empty-cart")
  document.querySelector("#item-count>p").textContent = `${cartArr.length}  Items in your Cart`
    document.querySelector("#cart").textContent="";
 
    cartArr.map(function(ele,index){

      // 
    var div = document.createElement("div")
    div.setAttribute("id","item")
    //left part
    let div1 = document.createElement("div")

    let div11 = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",`${ele.image}` )
    img.setAttribute("id","img")
    
    // // descripton
    let div12 = document.createElement("div")
    let name = document.createElement("p")
    name.textContent = ele.title
    let comp = document.createElement("p")
    comp.textContent = ele.company
    let tab_Q = document.createElement("p")
    tab_Q.textContent = ""
    let price = document.createElement("p")
    let MRP = document.createElement("span")
    MRP.textContent ="MRP ₹"+  Number.parseFloat(ele.Q*Number.parseFloat(ele.mrp)).toFixed(2)
    let sellprice = document.createElement("span")
    sellprice.textContent="₹"+ Number.parseFloat(ele.Q*Number.parseFloat(ele.offRate)).toFixed(2) +"*"
    let off = document.createElement("span")
    off.textContent=ele.offer
    let delivery = document.createElement("p")
    delivery.textContent = "Delivery by "
    let span = document.createElement("span")
    span.textContent="Today,7:00 pm-10:00 pm"
    
    //cart right part
    let div2 = document.createElement("div")
    let del_logo = document.createElement("img")
       del_logo.setAttribute("src","https://assets.pharmeasy.in/web-assets/images/icDelete.svg")
       del_logo.addEventListener("click",del)
       del_logo.setAttribute("id","remove_box")
    let Qty = document.createElement("select")
    let opt = document.createElement("option")
    opt.textContent="Qty 1"; opt.value=1;
    let opt1 = document.createElement("option")
    opt1.textContent="1"; opt1.value=1;
    let opt2 = document.createElement("option")
    opt2.textContent="2"; opt2.value=2;
    let opt3 = document.createElement("option")
    opt3.textContent="3"; opt3.value=3;
    let opt4 = document.createElement("option")
    opt4.textContent="4"; opt4.value=4;
    let opt5 = document.createElement("option")
    opt5.textContent="5"; opt5.value=5;
    let opt6 = document.createElement("option")
    opt6.textContent="6"; opt6.value=6;
    let opt7 = document.createElement("option")
    opt7.textContent="7"; opt7.value=7;
    let opt8 = document.createElement("option")
    opt8.textContent="8"; opt8.value=8;
    let opt9 = document.createElement("option")
    opt9.textContent="9"; opt9.value=9;
    let opt10 = document.createElement("option")
    opt10.textContent="10"; opt10.value=10;
    let opt11 = document.createElement("option")
    opt11.textContent="11"; opt11.value=11;
    let opt12 = document.createElement("option")
    opt12.textContent="12"; opt12.value=12;
    let opt13 = document.createElement("option")
    opt13.textContent="13"; opt13.value=13;
    let opt14 = document.createElement("option")
    opt14.textContent="14"; opt14.value=14;
    let opt15 = document.createElement("option")
    opt15.textContent="15"; opt15.value=15;
    let opt16 = document.createElement("option")
    opt16.textContent="16"; opt16.value=16;
    let opt17 = document.createElement("option")
    opt17.textContent="17"; opt17.value=17;
    let opt18 = document.createElement("option")
    opt18.textContent="18"; opt18.value=18;
    let opt19 = document.createElement("option")
    opt19.textContent="19"; opt19.value=19;
    let opt20 = document.createElement("option")
    opt20.textContent="20"; opt20.value=20;
    
    
    Qty.append(opt,opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9,opt10,opt11,opt12,opt13,opt14,opt15,opt16,opt17,opt18,opt19,opt20)
    
    Qty.addEventListener("change",calcu)
      
     
      //append
    delivery.append(span)
    div2.append(del_logo,Qty)
    div11.append(img)
    price.append(MRP,sellprice,off)
    div12.append(name,comp,tab_Q,price,delivery)
    div1.append(div11,div12)
    div.append(div1,div2)
    document.querySelector("#cart").append(div)



       //cart value calculate
      cart_value=0;  MRP_total = 0;
    cartArr.map(function(sum){
      let sum1=Number.parseFloat(sum.Q*Number.parseFloat(sum.offRate))
      cart_value+=sum1
      let MRP1=Number.parseFloat(sum.Q*Number.parseFloat(sum.mrp))
      MRP_total+=MRP1
     })
     document.querySelector("#total>span").textContent=`₹ ${(cart_value).toFixed(2)}`


     //item remove
    function del(){
      cartArr.splice(index,1)
        localStorage.setItem("cart-list",JSON.stringify(cartArr))
        displaycart()
    }
   

    //Qty increase/decrease
    function calcu(){
      ele.Q=Qty.value;
      document.querySelector("#total>span").textContent=`₹ ${(cart_value)}`
      localStorage.setItem("cart-list",JSON.stringify(cartArr))
      displaycart()
    }
    })


    //*RIGHT PART
   let temp = document.querySelector("#cost_sum>div:first-child")
     document.querySelector("#cost_sum").textContent=""
     document.querySelector("#cost_sum").append(temp)

    let rdiv = document.createElement("div")
    rdiv.setAttribute("id","r-1")
    let rdiv1 = document.createElement("div")
    rdiv.setAttribute("id","r-2")
    
  //Bill details
    let rdivin1 = document.createElement("div") ; 
    let rdivin1_1 = document.createElement("div")
     let p = document.createElement("p")
     p.textContent="Bill Summary"; rdivin1_1.append(p)

    let rdivin1_2 = document.createElement("div")
    let p1 = document.createElement("p")
     p1.textContent="Total MRP"
     let p2 = document.createElement("p")
     p2.textContent= "₹ "+MRP_total.toFixed(2); rdivin1_2.append(p1,p2)

    let rdivin1_3 = document.createElement("div")
    let p3 = document.createElement("p")
    p3.textContent="Discount on MRP"
    let p4 = document.createElement("p")
    p4.textContent= "-₹ "+(MRP_total-cart_value).toFixed(2); rdivin1_3.append(p3,p4)


    rdivin1.append(rdivin1_1,rdivin1_2,rdivin1_3)

    let rdivin2 = document.createElement("div")
    let rdivin2_1 = document.createElement("div")
    let p2_1 = document.createElement("p")
    p2_1.textContent="Cart Value"
    let p2_2 = document.createElement("p")
    p2_2.textContent ="₹" +cart_value.toFixed(2); rdivin2_1.append(p2_1,p2_2)

    let rdivin2_2 = document.createElement("div")
    let p2_3 = document.createElement("p")
    p2_3.textContent= "Delivery Charges"
    let p2_4 = document.createElement("p")
    let p2_4span = document.createElement("span")
    p2_4span.textContent="₹59.00"; 
    p2_4.textContent = "₹29.00";
    p2_4.append(p2_4span); rdivin2_2.append(p2_3,p2_4)

    let rdivin2_3 = document.createElement("div")
    let p2_5 = document.createElement("a")
    p2_5.textContent="Want Free delivery? Click Here"; rdivin2_3.append(p2_5)
    rdivin2.append(rdivin2_1,rdivin2_2,rdivin2_3)

    let rdivin3 = document.createElement("div")
    let rdivin3_1 = document.createElement("div")
    let p3_1 = document.createElement("p")
    p3_1.textContent="Amount to be paid"
    let p3_2 = document.createElement("p")
    p3_2.textContent="₹"+ (cart_value+29).toFixed(2) ; rdivin3_1.append(p3_1,p3_2)

    rdivin3.append(rdivin3_1)

    rdiv.append(rdivin1,rdivin2,rdivin3)
    
  
   let billArr = []
    var obj = [{
      mrp : MRP_total.toFixed(2),
      off : (MRP_total-cart_value).toFixed(2),
      value : cart_value.toFixed(2),
      final : cart_value.toFixed(2)
    }
  ]
  billArr.push(obj)
    localStorage.setItem("bill-list",JSON.stringify(obj))

  
    document.querySelector("#cost_sum").append(rdiv,rdiv1)


    //if cart_empty 
    if(cartArr.length!=0){
    document.getElementById("cart_count").textContent= cartArr.length
  
    }else{
    document.getElementById("cart_count").textContent=""
    rdiv.textContent=""
    document.querySelector("#cart").append(delivery,cart_empty)

    }



    // display name

    
   var user_number = localStorage.getItem("login-data")
  var userArr =JSON.parse(localStorage.getItem("user-data"))

  userArr.map(function(ele,index){
  // console.log(ele)
  if(ele.ph == user_number )
  document.getElementById("name-display").textContent = ele.name ;
  })

   


if(localStorage.getItem("login-data")==""){
  console.log("login-empty")
  
}
}