const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "passed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

const testResult1 = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "passed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called allTestsPassed
// that returns TRUE if all tests passed
// and FALSE if even one test failed

function allTestsPassed(testResults){
  
    let allTestsPassed = true; 
    for (let i=0;i< testResults.length; i++){
        if (testResults[i].status ==="failed"){
            allTestsPassed = false;
        }
    }
    return allTestsPassed;
}
console.log(allTestsPassed(testResult1));

