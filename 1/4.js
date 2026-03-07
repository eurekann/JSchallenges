// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains 
// that element.

function containsElement(array,el){
   let  containsEl= false;
   for (let i=0; i<array.length; i++)
   {
    if (array[i]=== el)
    {
        containsEl= true;
    }
   }
   return containsEl;
}



 console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
 console.log(containsElement(["a", "b", "c", "d"], "e")); // false