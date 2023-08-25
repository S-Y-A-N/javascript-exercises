const convertToCelsius = function(fahrenheit) {
  let convertedTemp = (fahrenheit - 32)*(5/9); 
  convertedTemp = Math.round(convertedTemp * 10) / 10; 
  return convertedTemp;
};

const convertToFahrenheit = function(celsius) {
  let convertedTemp = celsius*(9/5) + 32; 
  convertedTemp = Math.round(convertedTemp * 10) / 10; 
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
