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
let prestigePrice = 100000
let prestigePercent = 0
let investmentPrice = 100
let businessPrice = 1000
let employeePrice = 500
let valuePrice = 100000
let interval = 1000
let employees = 0

valueUpgrade.style.display = 'none'



var  myTimer = function() {
  clearInterval(loop);
  console.log(Math.floor(1000*( cupcakeValue*((mpc/4)*(mps*employees) ) + ( cupcakeValue*((mpc/4)*(mps*employees)) )*prestigePercent))/1000)



if (mps == 0) {
  if (money < employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
}
if (money < investmentPrice) {
  investment.style.border = '2px solid crimson'
} else {
  investment.style.border = '2px solid blue'
} 
if (money < businessPrice) {
  business.style.border = '2px solid crimson'
} else {
  business.style.border = '2px solid blue'
} 
if (money < valuePrice) {
  valueUpgrade.style.border = '2px solid crimson'
} else {
  valueUpgrade.style.border = '2px solid blue'
} 



  if (mps == 0) {
    employments.style.opacity = '50%'
    employments.disabled = true
    employments.style.border = '2px solid crimson'
  
  } else {
    employments.style.opacity = '100%'
    employments.disabled = false
    if (money < employeePrice) {
      employments.style.border = '2px solid crimson'
    } else {
      employments.style.border = '2px solid blue'
    }
  }


  if (cupcakeNet >= prestigePrice) {
    prestigeButton.disabled = false
  }
  else {
    prestigeButton.disabled = true
  }

  cupcakes += ((mpc/4)*(mps * employees))
  if (cupcakeNet < prestigePrice) {
  cupcakeNet += ((mpc/4)*(mps * employees))
  } else {
    cupcakeNet = prestigePrice
  }
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes)
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  title.innerHTML = Math.round(cupcakes) + ' - ' + 'Kitty Clicker'
  income.innerHTML = 'Income: ' + Math.floor(100*( cupcakeValue*((mpc/4)*(mps*employees) ) + ( cupcakeValue*((mpc/4)*(mps*employees)) )*prestigePercent))/100 + '$'
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
    if (money < valuePrice) {
      valueUpgrade.style.border = '2px solid crimson'
    } else {
      valueUpgrade.style.border = '2px solid blue'
    } 
  }
}​);​

employments.addEventListener("click", function() {
  
  if (mps > 0) {
    if (money >= employeePrice) {
      employees += 1;
      money -= employeePrice;

      

      employeePrice = Math.round(employeePrice*1.5);
      employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
    }
    if (money < employeePrice) {
      employments.style.border = '2px solid crimson'
    } else {
      employments.style.border = '2px solid blue'
    }
  }
  
}​);​

clicker.addEventListener("click", function() {

if (mps > 0) {
  if (money < employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
} else {
  employments.style.border = '2px solid crimson'
}
  if (money < investmentPrice) {
    investment.style.border = '2px solid crimson'
  } else {
    investment.style.border = '2px solid blue'
  } 
  if (money < businessPrice) {
    business.style.border = '2px solid crimson'
  } else {
    business.style.border = '2px solid blue'
  } 
  if (money < valuePrice) {
    valueUpgrade.style.border = '2px solid crimson'
  } else {
    valueUpgrade.style.border = '2px solid blue'
  } 

  console.log(cupcakeNet)
  cupcakes += mpc;
  if (cupcakeNet < prestigePrice) {
  cupcakeNet += mpc;
  } else {
    cupcakeNet = prestigePrice
  }
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$'
  prestigeButton.innerHTML = 'Cupcakes <br>' + Math.floor(cupcakeNet) + '/' + prestigePrice;
}​);​

investment.addEventListener("click", function() {
    if (money >= investmentPrice) {
    mpc = (Math.floor(( (mpc*(1.1)))*100))/100;
    money -= investmentPrice;
    investmentPrice = Math.round(investmentPrice*(1.2 + prestige))
    investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
    cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);

    if (money <= investmentPrice) {
      investment.style.border = '2px solid crimson'
    } else {
      investment.style.border = '2px solid blue'
    } 
  }
}​);​

business.addEventListener("click", function() {
if (mps == 0) {
  employments.style.opacity = '50%'
  employments.style.border = '2px solid crimson'
} else {
  employments.style.opacity = '100%'
  if (money <= employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
}
    if (money >= businessPrice) {
      employments.style.opacity = '100%'
      employments.disabled = false
      mps += 1;
      money -= businessPrice;
      businessPrice = Math.round(businessPrice*2);
      business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
      moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$'; 
      interval -= 75
      console.log('interval: ' + interval + 'ms')
      if (money < businessPrice) {
        business.style.border = '2px solid crimson'
      } else {
        business.style.border = '2px solid blue'
      } 
      if (mps == 0) {
        employments.style.opacity = '50%'
        employments.style.border = '2px solid crimson'
      } else {
        employments.style.opacity = '100%'
        if (money < employeePrice) {
          employments.style.border = '2px solid crimson'
        } else {
          employments.style.border = '2px solid blue'
        }
      }
    }

}​);​

sell.addEventListener("click", function() {
  money += cupcakes*cupcakeValue;
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  cupcakes = 0
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';



  if (money < employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
  if (money < investmentPrice) {
    investment.style.border = '2px solid crimson'
  } else {
    investment.style.border = '2px solid blue'
  } 
  if (money < businessPrice) {
    business.style.border = '2px solid crimson'
  } else {
    business.style.border = '2px solid blue'
  } 
  if (money < valuePrice) {
    valueUpgrade.style.border = '2px solid crimson'
  } else {
    valueUpgrade.style.border = '2px solid blue'
  } 
  
}​);​



prestigeButton.addEventListener("click", function() {
  prestige += 1
  prestigePercent = prestige/.05
  cupcakes = 0
  cupcakeValue = 1
  money = 0
  mpc = 1 + prestige
  mps = 0
  prestigePrice *= 100;
  investmentPrice = 100
  businessPrice = 1000
  employeePrice = 500
  valuePrice = 10000
  interval = 1000
  employees = 0
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  prestigeDisplay.innerHTML = prestige
  prestigeButton.disabled = true


  if (money < employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
  if (money < investmentPrice) {
    investment.style.border = '2px solid crimson'
  } else {
    investment.style.border = '2px solid blue'
  } 
  if (money < businessPrice) {
    business.style.border = '2px solid crimson'
  } else {
    business.style.border = '2px solid blue'
  } 
  if (money < valuePrice) {
    valueUpgrade.style.border = '2px solid crimson'
  } else {
    valueUpgrade.style.border = '2px solid blue'
  } 
  
}​);​
  
screen.addEventListener ("click", function() { 
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
  income.innerHTML = 'Income: ' + Math.floor(100*( cupcakeValue*((mpc/4)*(mps*employees) ) + ( cupcakeValue*((mpc/4)*(mps*employees)) )*prestigePercent))/100 + '$'

  if (money <= employeePrice) {
    employments.style.border = '2px solid crimson'
  } else {
    employments.style.border = '2px solid blue'
  }
  if (money <= investmentPrice) {
    investment.style.border = '2px solid crimson'
  } else {
    investment.style.border = '2px solid blue'
  } 
  if (money <= businessPrice) {
    business.style.border = '2px solid crimson'
  } else {
    business.style.border = '2px solid blue'
  } 
  if (money <= valuePrice) {
    valueUpgrade.style.border = '2px solid crimson'
  } else {
    valueUpgrade.style.border = '2px solid blue'
  } 
  
});

