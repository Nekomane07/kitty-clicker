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
var prestigeButton = document.getElementById('prestigeButton')
var prestigeDisplay = document.getElementById('prestigeDisplay')
let prestige = 0
let cupcakes = 0
let cupcakeValue = 1
let money = 0
let mpc = 1
let mps = 0
let cupcakeNet = 0
let prestigePrice = 1000000
let investmentPrice = 100
let businessPrice = 1000
let employeePrice = 500
let valuePrice = 10000
let interval = 1000
let employees = 0




const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);





var  myTimer = function() {
  clearInterval(loop);
console.log(cupcakeNet)

  if (mps == 0) {
    employments.style.opacity = '50%'
  } else {
    employments.style.opacity = '100%'
  }
  if (cupcakeNet >= prestigePrice) {
    prestigeButton.disabled = false
  }
  else {
    prestigeButton.disabled = true
  }

  cupcakes += ((mpc/4)*(mps * employees))
  cupcakeNet += ((mpc/4)*(mps * employees))
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes)
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  title.innerHTML = Math.round(cupcakes) + ' - ' + 'Kitty Clicker'
  income.innerHTML = 'Income: ' + Math.floor(( cupcakeValue*((mpc/4)*(mps*employees))*100) )/100 + '$'
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  loop = setInterval(myTimer, interval);
  
  // constant variables
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
  business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
  prestigeDisplay.innerHTML = prestige
  prestigeButton.innerHTML = 'Cupcakes <br>' + Math.round(cupcakeNet) + '/' + prestigePrice;
}
var loop = setInterval(myTimer, loop);

valueUpgrade.addEventListener("click", function() {
  if (money >= valuePrice) {
    cupcakeValue += 1 + prestige
    money -= valuePrice;
    valuePrice = Math.round(valuePrice*2);
    valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
    moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  }
}​);​

employments.addEventListener("click", function() {
  if (mps > 0) {
    if (money >= employeePrice) {
      employees += 1 + prestige
      money -= employeePrice;
      employeePrice = Math.round(employeePrice*1.5);
      employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
    }
  }
}​);​

clicker.addEventListener("click", function() {
  console.log(cupcakeNet)
  cupcakes += mpc;
  cupcakeNet += mpc;
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$'
  prestigeButton.innerHTML = 'Cupcakes <br>' + Math.floor(cupcakeNet) + '/' + prestigePrice;
}​);​

investment.addEventListener("click", function() {
    if (money >= investmentPrice) {
    mpc = (Math.floor(( (mpc*(1.1 + prestige)))*100))/100;
    money -= investmentPrice;
    investmentPrice = Math.round(investmentPrice*(1.2 + prestige))
    investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
    cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
}
}​);​

business.addEventListener("click", function() {
  if (mps == 0) {
    employments.style.opacity = '50%'
  } else {
    employments.style.opacity = '100%'
  }

    if (money >= businessPrice){
      mps += 1 + prestige
      money -= businessPrice;
      businessPrice = Math.round(businessPrice*2);
      business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$'; 
      interval -= 75
      console.log(interval)
  }
}​);​

sell.addEventListener("click", function() {
  money += cupcakes*cupcakeValue;
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  cupcakes = 0
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
}​);​



prestigeButton.addEventListener("click", function() {
  prestige += 1
  cupcakes = 0
  cupcakeValue = 1
  money = 0
  mpc = prestige + 1
  mps = 0
  prestigePrice *= 1000;
  investmentPrice = 100
  businessPrice = 1000
  employeePrice = 500
  valuePrice = 10000
  interval = 1000
  employees = 0
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  prestigeDisplay.innerHTML = prestige
  prestigeButton.disabled = true
}​);​
  
screen.addEventListener ("click", function() { 
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
  income.innerHTML = 'Income: ' + Math.floor( ( ( cupcakeValue*((mpc/4)*(mps*employees))*100) ) )/100 + '$'
  
});