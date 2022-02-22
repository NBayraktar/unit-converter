const inputValue = document.getElementById('input');
const meterFeetEl = document.getElementById('length');
const literGallonEl = document.getElementById('volume');
const kilogramPoundEl = document.getElementById('mass');
inputValue.addEventListener('keyup', calcUnits);

function calcUnits() {
  let inputNum = Number(inputValue.value);
  let metFt = inputNum * 3.2808;
  let ftMet = inputNum * 0.3048;
  let litGall = inputNum * 0.26417;
  let gallLit = inputNum * 3.785411784;
  let kgPound = inputNum * 2.20462262185;
  let poundKg = inputNum * 0.453592;

  meterFeetEl.innerHTML = `${inputNum} meters = ${metFt.toFixed(3)} feet | ${inputNum} feet = ${ftMet.toFixed(3)} meters`;
  literGallonEl.innerHTML = `${inputNum} liters = ${litGall.toFixed(3)} gallons | ${inputNum} gallons = ${gallLit.toFixed(3)} liters`;
  kilogramPoundEl.innerHTML = `${inputNum} kilos = ${kgPound.toFixed(3)} | ${inputNum} pounds = ${poundKg.toFixed(3)} kilos`
}