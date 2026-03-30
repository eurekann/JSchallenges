const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called countTestResults
// that returns how many tests PASSED
// and how many tests FAILED

function countTestResults (testResults){
  let failed =0;
  let passed =0;
  let countResults = {};

  for (let i =0;i<testResults.length;i++){
    if (testResults[i].status==="failed"){
        failed ++;
        countResults.failed = failed;
    }
    else if(testResults[i].status==="passed"){
        passed++;
        countResults.passed = passed;
    }

  }
return countResults;
}
console.log(countTestResults(testResults));