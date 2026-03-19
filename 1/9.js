//Return the longest word in a string.

function longestWord (str){
    let result = str.split(" ");
    let longest = "";
    for (let i = 0; i<result.length;i++)
    {
        if (result[i].length>longest.length)
        {
            longest = result[i];
        }
    }
return longest;
}


console.log(longestWord("I love JavaScript")); 
