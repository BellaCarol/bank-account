# bank-account
checking bank account
var balance = 325.00;
var checkBalance = true;
var isActive = true;
var console = {};
//I want to check my bank card balance or check if my account is still active
if (checkBalance && isActive) {
console.log("Wait a moment please, we are checking your balance.");
} if (balance > 0) {
console.log("Your balance is  $" + balance);
} else if (!isActive) {
console.log("Your account is no longer active.");
} else if (balance === 0 || balance < 0) {
console.log("Your account is empty or negative.");
} else {
 console.log("Something went wrong. Please try again.");	}	
