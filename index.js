// Global variable declared with var
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Note: using var to declare a global variable inside a function (as per lab instructions)
}

// Function that overwrites the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Constant declared in global scope
const leastFavouriteCustomer = 'bob';

// Function that attempts to change the constant leastFavouriteCustomer
function changeLeastFavouriteCustomer() {
  // Attempting to change a constant will throw an error or be ignored (in non-strict mode)
  // This is to demonstrate the error as per the lab instructions
  leastFavouriteCustomer = 'not bob'; // This will cause an error when executed
}

// Exporting functions for testing purposes if required
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavouriteCustomer,
  changeLeastFavouriteCustomer // Corrected function name to match the defined function
};