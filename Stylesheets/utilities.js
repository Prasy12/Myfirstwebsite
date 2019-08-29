var crrncy = {'EUR': {'INR': 79.78, 'USD': 1.11}, 'USD': {'INR': 71.98, 'EUR': 0.90}}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;


  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
    
  }
  
          
  result = result.toFixed(3);
  
  

  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);

var timeDiff;
var selectedCity;
var daylightSavingsAdjust = 0;

function updateTimeZone(){
  var lstCity = document.form1.lstCity;
  timeDiff = lstCity.options[lstCity.selectedIndex].value;
  selectedCity = lstCity.options[lstCity.selectedIndex].text;
  updateTime();
}

function getTimeString(dateObject){
  var timeString;
  var hours = dateObject.getHours();
  if(hours < 10){
    hours = "0" + hours;
  }
  
  var minutes = dateObject.getMinutes();
  if(minutes<10){
    minutes = "0" + minutes;
  }
  
  var seconds = dateObject.getSeconds();
  if(seconds<10){
    seconds ="0" + seconds;
  }
  
  timeString = hours + ":" + minutes + ":" + seconds;
  return timeString;
}
  
function updateTime(){
  var nowTime = new Date();
  var resultsText = "<p>Local Time is " + getTimeString(nowTime) + "</p>";
  
  nowTime.setMinutes(nowTime.getMinutes() + nowTime.getTimezoneOffset() + parseInt(timeDiff)) ;
  
  resultsText += "<p>" + selectedCity + " time is "+ getTimeString(nowTime) 
  + "</p>";
  
  document.getElementById("ConversionResultsDIV").innerHTML = resultsText;
}

