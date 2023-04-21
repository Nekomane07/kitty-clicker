
var clicker = document.getElementById('clicker')
var investment = document.getElementById('investment')
var convert = document.getElementById('convert')
var business = document.getElementById('business')
var cupcakeDisplay = document.getElementById('cupcakeDisplay')
var moneyDisplay = document.getElementById('moneyDisplay')
var income = document.getElementById('income')
var employments = document.getElementById('employments')
var title = document.getElementById('title')
var sell = document.getElementById('trade')
let cupcakes = 0
let cupcakeValue = 1
let money = 0
let mpc = 1
let mps = 0
let investmentPrice = 100
let businessPrice = 1000
let employeePrice = 500
let interval = 300
let employees = 0

function myTimer() {
  cupcakes += (mpc/4)*(mps * employees)
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes)
  title.innerHTML = Math.round(cupcakes) + ' - ' + 'Kitty Clicker'
  income.innerHTML = 'Income: ' + Math.floor(((mpc/4)*(mps*employees)*100))/100 + '$'

}


employments.addEventListener("click", function() {
  if (money >= employeePrice) {
    employees += 1
    money -= employeePrice;
    employeePrice = Math.round(employeePrice*1.5);
    employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
    moneyDisplay.innerHTML = 'Cash: ' + Math.floor(money);
  }
}​);​

clicker.addEventListener("click", function() {
  cupcakes += mpc;
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes);
  console.log(cupcakes)
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
}​);​

investment.addEventListener("click", function() {
  if (cupcakes >= investmentPrice) {
    mpc = (Math.floor(( mpc*1.1 )*100))/100;
    cupcakes -= investmentPrice;
    investmentPrice = Math.round(investmentPrice*1.2)
    investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
    cupcakeDisplay.innerHTML = 'cupcakes: ' + Math.floor(cupcakes);
  }
}​);​

business.addEventListener("click", function() {
    if (money >= businessPrice){
      mps += 1
      money -= businessPrice;
      businessPrice = Math.round(businessPrice*2);
      business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor(money); 
  }
}​);​

sell.addEventListener("click", function() {
  money += cupcakes*cupcakeValue;
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor(cupcakes);
  cupcakes = 0
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes);
}​);​

setInterval(myTimer, interval);

// Program employments 
