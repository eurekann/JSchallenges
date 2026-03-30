const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called groupTestsByStatus
// that groups tests into passed and failed arrays

function groupTestsByStatus(testResults){
    let groups = {passed:[],
                  failed:[]}
  
    for (let i = 0; i< testResults.length;i++){
     if (testResults[i].status ==="failed"){
        groups.failed.push(testResults[i]);
     }
     else if (testResults[i].status==="passed"){
        groups.passed.push(testResults[i]);
     }
    }
return groups;
}
console.log(groupTestsByStatus(testResults));