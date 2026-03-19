//write a function that builds a substring until 
// a duplicate appears.
function longestStartSubstring(str){
    let longest=[];
    let result =str.split("");
    for (let k=0; k<result.length;k++){
        let subRes= [];
    }
    for (let i = 0;i<result.length;i++){
        let repeated = false;
        for (let j=0;j<subRes.length;j++){
           if(subRes[j]===result[i]){
            repeated = true;
            break;
           } 
            
        }
        if(repeated){
        break;}
        else {
       subRes.push(result[i]);
        }
    
    
    }
    
    return longest.join("");
}



console.log(longestStartSubstring("abcabcbb"));
