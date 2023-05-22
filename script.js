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
var prestigeButton = document.getElementById('prestigeButton')
var prestigeDisplay = document.getElementById('prestigeDisplay')
var saveButton = document.getElementById('save')
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
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
let cookies = ''

// ------------------------------------------------------------------------- cookies --------------------------------------------------------------------------------------------

function checkCookies() {
  clearInterval()
  if (Math.round(parseFloat(getCookie('Cash'))) != Math.round(money) || (mpc != parseFloat(getCookie('MPC'))) || (mps != parseInt(getCookie('Bakeries'))) || (cupcakeValue != parseFloat(getCookie('Cupcake Value'))) || (employees != parseInt(getCookie('Bakers')))) {
    saveButton.innerHTML = 'Save?'

    saveButton.classList.remove('hide')
  
  } else {

    saveButton.classList.add('hide')
      if(saveButton.matches(":hover")) {
        saveButton.innerHTML = 'Save?'

      } else {
        saveButton.innerHTML = 'Saved'
  if (cupcakeNet > prestigePrice) {
    cupcakeNet = prestigePrice
  }
}
  }}

  setInterval(checkCookies, 100)


let wipeCookies = function() {
  setCookie('Cash', 0, 9999)
  setCookie('Cupcakes', 0, 9999)
  setCookie('Networth', 0, 9999)
  setCookie('MPC', 1, 9999)
  setCookie('Bakeries', 0, 9999)
  setCookie('Bakers', 0, 9999) 
  setCookie('Prestiges', 0, 9999)
  setCookie("Interval", 1000, 9999)
  setCookie("Cupcake Value", 1, 9999)

  // Prices
  setCookie('Mix Price', 100, 9999)
  setCookie('Bakery Price', 1000, 9999)
  setCookie('Baker Price', 500, 9999)  
  setCookie('Prestige Price', 100000, 9999)
  localStorage.clear()
  saveLocal()
}

let saveLocal = function() {
  today = new Date();
  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  localStorage.setItem('Cash', getCookie('Cash'));
  localStorage.setItem('Cupcakes',getCookie('Cupcakes'));
  localStorage.setItem('Networth', getCookie('Networth'));
  localStorage.setItem('MPC', getCookie('MPC'))
  localStorage.setItem('Bakeries', getCookie('Bakeries'));
  localStorage.setItem('Bakers', getCookie('Bakers'))
  localStorage.setItem('Prestiges', getCookie('Prestiges'));
  localStorage.setItem('Interval', getCookie('Interval'))
  localStorage.setItem('Cupcake Value', getCookie('Cupcake Value'))


  localStorage.setItem('Mix Price', getCookie('Mix Price'));
  localStorage.setItem('Bakery Price', getCookie('Bakery Price'));
  localStorage.setItem('Baker Price', getCookie('Baker Price'));
  localStorage.setItem('Prestige Price', getCookie('Prestige Price'));

  alert('Local Storage Saved: \r' + cookies)
  }


  let cookieList = function() {
    var cookies = document.cookie.split(';');
          var ret = '';
          for(var i = 1; i <= cookies.length; i++) {
              ret += i + ' - ' + cookies[i - 1] + '\r';

          }
          ret += '\r Total Cookies: ' + cookies.length
          ret += '\r Time Saved: ' + time
          return ret;
          
      }
      

let loadLocal = function() {
    // Purchases and Stat's
    money = parseFloat(localStorage.getItem('Cash'))
    cupcakes = parseInt(localStorage.getItem('Cupcakes'))
    cupcakeNet = parseInt(localStorage.getItem('Networth'))
    mpc = parseFloat(localStorage.getItem('MPC'))
    mps = parseInt(localStorage.getItem('Bakeries'))
    employees = parseInt(localStorage.getItem('Bakers'))
    prestige = parseInt(localStorage.getItem('Prestiges'))
    interval = parseInt(localStorage.getItem('Interval'))
    cupcakeValue = parseInt(localStorage.getItem('Cupcake Value'))
    // Prices 
    investmentPrice = localStorage.getItem('Mix Price')
    businessPrice = localStorage.getItem('Bakery Price')
    employeePrice = localStorage.getItem('Baker Price')
    prestigePrice = localStorage.getItem('Prestige Price')
    checkError()

}

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


function saveCookies() {
  // Purchases and Stats
  setCookie('Cash', Math.floor(100*money)/100, 999)
  setCookie('Cupcakes', Math.round(cupcakes), 999)
  setCookie('Networth', Math.round(cupcakeNet), 999)
  setCookie('MPC', mpc, 999)
  setCookie('Bakeries', mps, 999)
  setCookie('Bakers', employees, 999) 
  setCookie('Prestiges', prestige, 999)
  setCookie("Interval", interval, 999)
  setCookie('Cupcake Value', cupcakeValue, 999)

  // Prices
  setCookie('Mix Price', Math.floor(100*(investmentPrice))/100, 999)
  setCookie('Bakery Price', Math.floor(100*(businessPrice))/100, 999)
  setCookie('Baker Price', Math.floor(100*(employeePrice))/100, 999)  
  setCookie('Prestige Price', Math.floor(100*(prestigePrice))/100, 999)
  checkCookies()
  cookies = cookieList()
  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  saveLocal()
}

window.addEventListener('beforeunload', function(e) {
  checkCookies()
    if (saveButton.classList.contains('hide') == false) {
      e.preventDefault();
      e.returnValue = '';
    }
});


let checkError = function() {
  for (let i = 1; i <= cookies.length; i++) {
    if (isNaN(getCookie(cookies.indexOf(i)))) {
        alert('ERROR: \br Save Corrupted')
        wipeCookies()
    } 
  }


}



window.onload = loadLocal()

// ----------------------------------------------------------------------------------



var incomeTracker = function() {
passiveIncome = Math.floor( 100*((mps * employees) / 4))/100
mixIncome = Math.floor(100*(mpc/4 * (mps * employees) - passiveIncome))/100
percentIncome = Math.floor(100*((mixIncome + passiveIncome)*prestigePercent))/100
totalIncome = Math.floor( 100*(( mixIncome + passiveIncome + percentIncome) ))/100
}



var  myTimer = function() {
  clearInterval(loop);
  checkCookies()
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
    Math.round(cupcakeNet)

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
  business.innerHTML = 'Bakeries: ' + mps + ' | ' + businessPrice + '$';
  prestigeDisplay.innerHTML = prestige
  prestigeButton.innerHTML = 'Cupcakes <br>' + Math.round(cupcakeNet) + '/' + prestigePrice;
  checkCookies()
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
  checkCookies()
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

  cupcakes += mpc;
  if (cupcakeNet < prestigePrice) {
  cupcakeNet += mpc;
  } else {
    cupcakeNet = (prestigePrice*10)/10
  }
  cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);
  sell.innerHTML = 'Sell: ' + Math.floor(((cupcakes*cupcakeValue)*100))/100 + '$'
  prestigeButton.innerHTML = 'Cupcakes <br>' + Math.floor(cupcakeNet) + '/' + prestigePrice;
}​);​


saveButton.addEventListener("click", function() {
  if (confirm('Are you sure you wish to save? \r' + 'Last Saved: ' + time) == true) {
    saveCookies()
  }
})

investment.addEventListener("click", function() {
      if (money >= investmentPrice) {
    mpc = (Math.floor(( (mpc*(1.1)))*100))/100;
    money -= investmentPrice;
    investmentPrice = Math.round(investmentPrice*(1.1 + (prestige/10)))
    investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
    cupcakeDisplay.innerHTML = 'Cupcakes: <br>' + Math.floor(cupcakes);

    if (money <= investmentPrice) {
      investment.style.border = '2px solid crimson'
    } else {
      investment.style.border = '2px solid blue'
    } 
  }
  checkCookies()
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
    checkCookies()
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
  cupcakeNet = prestigePrice/10
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

  checkCookies()
}​);​
  
screen.addEventListener ("click", function() { 
  investment.innerHTML = 'Cupcake Mix: ' + mpc + ' | ' + investmentPrice + '$';
  employments.innerHTML = 'Kitty Bakers: ' + employees + ' | ' + employeePrice + '$';
  moneyDisplay.innerHTML = 'Cash: ' + Math.floor((money*100))/100 + '$';
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
  checkCookies()
});