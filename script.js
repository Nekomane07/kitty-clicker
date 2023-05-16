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
var saveButton = document.getElementById('save')
let prestige = 0
let cupcakes = 0
let cupcakeValue = 1
let money = 0 //check
let mpc = 1 //check
let mps = 0 //check
let cupcakeNet = 0 //check
let prestigePrice = 100000
let prestigePercent = 0 //check
let investmentPrice = 100
let businessPrice = 1000
let employeePrice = 500
let valuePrice = 100000
let interval = 1000
let employees = 0 //check
let passiveIncome = 0
let mixIncome = mpc
let totalIncome = 0
let percentIncome = 0

valueUpgrade.style.display = 'none'


// ------------------------------------------------------------------------- cookies --------------------------------------------------------------------------------------------

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkSave() {
  if (money > parseFloat(getCookie('Cash')) || (mpc > parseFloat(getCookie('MPC'))) || (mps > parseInt('Bakeries')) || (employees > parseInt('Bakers')) || prestige > parseInt('Prestiges')) {
    saveButton.classList.remove('hide')
  } else {
    saveButton.classList.add('hide')
  }}

function save() {
  // Purchases and Stats
  setCookie('Cash', Math.floor(100*money)/100, 7)
  setCookie('Cupcakes', Math.round(cupcakes), 7)
  setCookie('Networth', Math.round(cupcakeNet), 7)
  setCookie('MPC', mpc, 7)
  setCookie('Bakeries', mps, 7)
  setCookie('Bakers', employees, 7) 
  setCookie('Prestiges', prestige, 7)

  // Prices
  setCookie('Mix Price', Math.floor(100*(investmentPrice))/100, 7)
  setCookie('Bakery Price', Math.floor(100*(mps))/100, 7)
  setCookie('Baker Price', Math.floor(100*(employeePrice))/100, 7)  
  setCookie('Prestige Price', Math.floor(100*(prestigePrice))/100, 7)


  checkSave()
}


window.onload = function() {

  // Purchases and Stat's
  if(parseInt(getCookie('Networth')) > 0) {
  checkSave()
  money = parseFloat(getCookie('Cash'))
  cupcakes = parseInt(getCookie('Cupcakes'))
  cupcakeNet = parseInt(getCookie('Networth'))
  mpc = getCookie('MPC')
  mps = getCookie('Bakeries')
  employees = getCookie('Bakers') 
  prestige = getCookie('Prestiges')


  // Prices 
  investmentPrice = getCookie('Mix Price')
  businessPrice = getCookie('Bakery Price')
  employeePrice = getCookie('Baker Price')  
  prestigePrice = getCookie('Prestige Price')


}}



// ----------------------------------------------------------------------------------



var incomeTracker = function() {
passiveIncome = Math.floor( 100*((mps * employees) / 4))/100
mixIncome = Math.floor(100*(mpc/4 * (mps * employees) - passiveIncome))/100
percentIncome = Math.floor(100*((mixIncome + passiveIncome)*prestigePercent))/100
totalIncome = Math.floor( 100*(( mixIncome + passiveIncome + percentIncome) ))/100
}



var  myTimer = function() {
  clearInterval(loop);
  console.log('Mix Income: ' + mixIncome + '\n prestige income: ' + percentIncome + ' - ' + prestigePercent * 100 + '%' + '\n Passive Income: ' + passiveIncome + '\n Total Income: ' + totalIncome + ' x' + cupcakeValue)

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

  cupcakes +=  (mpc/4)*(mps*employees) + ( (mpc/4)*(mps*employees) ) *prestigePercent
  if (cupcakeNet < prestigePrice) {
  cupcakeNet += ((mpc/4)*(mps * employees))
  } else {
    cupcakeNet = prestigePrice
  }
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes)
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  title.innerHTML = Math.round(cupcakes) + ' - ' + 'Kitty Clicker'
  income.innerHTML = 'Income: ' + Math.floor( ( 100* ( ( ( (mpc/4)*(mps*employees) ) + ( (mpc/4)*(mps*employees) ) *prestigePercent ) ) ))/100 + '$'
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

  if (cupcakeNet > parseFloat(getCookie('Networth'))) {
    saveButton.classList.remove('hide')
  } else {
    saveButton.classList.add('hide')
  }

}

var loop = setInterval(myTimer, loop);

// ----------------------------------------------------------------------




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
incomeTracker()
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


saveButton.addEventListener("click", function() {
  save()
  if (money > parseFloat(getCookie('Cash')) || cupcakes > parseInt(getCookie('Cupcakes')) || (cupcakeNet > parseInt(getCookie('Networth')))) {
    saveButton.classList.remove('hide')
  } else {
    saveButton.classList.add('hide')
  }

})

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
  checkSave()
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
    checkSave()
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
  checkSave()
}​);​



prestigeButton.addEventListener("click", function() {
  prestige += 1
  prestigePercent = (prestige / 0.05)/10
  cupcakes = 0
  cupcakeValue = 1 + prestige
  money = 0
  mpc = 1 + prestige
  mps = 0
  prestigePrice *= 10;
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
  save()
}​);​
  
screen.addEventListener ("click", function() { 
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
  valueUpgrade.innerHTML = 'Cupcake Value: ' + cupcakeValue + ' | ' + valuePrice + '$';
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$';
  business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
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
  checkSave
});
