const ftoc = function(fTemperature) {
  let cTemperature = (fTemperature - 32) * 5 / 9;
  return (Math.round(10 * cTemperature) / 10);
};

const ctof = function(cTemperature) {
  let fTemperature = (cTemperature * 9 / 5) + 32;
  return (Math.round(10 * fTemperature) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
