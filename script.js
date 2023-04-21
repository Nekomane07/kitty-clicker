var clicker = document.getElementById('clicker')
var investment = document.getElementById('investment')
var convert = document.getElementById('convert')
var business = document.getElementById('business')
var cupcakeDisplay = document.getElementById('cupcakeDisplay')
var moneyDisplay = document.getElementById('moneyDisplay')
var income = document.getElementById('income')
var employments = document.getElementById('employments')
var valueUpgrade = document.getElementById('valueUpgrade')
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
let valuePrice = 10000
let interval = 300
let employees = 0





const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);











function myTimer() {
  if (mps == 0) {
    employments.style.opacity = '50%'
  } else {
    employments.style.opacity = '100%'
  }

  cupcakes += (mpc/4)*(mps * employees)
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes)
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  title.innerHTML = Math.round(cupcakes) + ' - ' + 'Kitty Clicker'
  income.innerHTML = 'Income: ' + Math.floor( ( cupcakeValue*((mpc/4)*(mps*employees))*100) )/100 + '$'
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
}


valueUpgrade.addEventListener("click", function() {
  if (money >= valuePrice) {
    cupcakeValue += 1
    money -= valuePrice;
    valuePrice = Math.round(valuePrice*2);
    valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
    moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  }
}​);​

employments.addEventListener("click", function() {
  if (mps > 0) {
    if (money >= employeePrice) {
      employees += 1
      money -= employeePrice;
      employeePrice = Math.round(employeePrice*1.5);
      employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
    }
  }
}​);​

clicker.addEventListener("click", function() {
  cupcakes += mpc;
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes);
  console.log(cupcakes)
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$'
}​);​

investment.addEventListener("click", function() {
  if (money >= investmentPrice) {
    mpc = (Math.floor(( mpc*1.1 )*100))/100;
    money -= investmentPrice;
    investmentPrice = Math.round(investmentPrice*1.2)
    investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
    cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes);
  }
}​);​

business.addEventListener("click", function() {
    if (money >= businessPrice){
      mps += 1
      money -= businessPrice;
      businessPrice = Math.round(businessPrice*2);
      business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$'; 
  }
}​);​

sell.addEventListener("click", function() {
  money += cupcakes*cupcakeValue;
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  cupcakes = 0
  cupcakeDisplay.innerHTML = 'Cupcakes: ' + Math.floor(cupcakes);
}​);​

setInterval(myTimer, interval);


