
function digitToValue(digit) {
const value = digit.charCodeAt(0) - '0'.charCodeAt(0);
if (value < 0 || value > 9) throw new Error("Invalid digit");
return value;
}


function valueToDigit(value) {
return String.fromCharCode('0'.charCodeAt(0) + value);
}


function toDecimal(numStr, fromBase) {
let value = 0;
for (let i = 0; i < numStr.length; i++) {
const digitValue = digitToValue(numStr[i]);
if (digitValue >= fromBase) throw new Error("Digit outside base range");
value = value * fromBase + digitValue;
}
return value;
}


// Convert decimal number to base (2 or 10)
function fromDecimal(value, toBase) {
if (value === 0) return "0";
let result = "";
while (value > 0) {
const remainder = value % toBase;
result = valueToDigit(remainder) + result;
value = Math.floor(value / toBase);
}
return result;
}



export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
const decimalValue = toDecimal(inputNumber, inputNumberSystem);
const converted = fromDecimal(decimalValue, outputNumberSystem);
return converted;
}


export function permittedInputSystems() {
return [10, 2];
}


export function permittedOutputSystems() {
return [10, 2];
}
