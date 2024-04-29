// Array Methods:

// 1. Push Method
//The push() method adds new items to the end of an array.
let Number = [1,2,3,4,5];
Number.push(6);
console.log(Number);
// In array have the string;
let String = ["Fruit","Combo","banana","lazypeople"];
String.push("Varun");
console.log(String)

// 2.PoP Method:
// The pop() method in JavaScript removes the last element from an array and returns that element.

let arr = ["a","b","c","d","e"]
let arrpop = arr.pop();// Pop removing the last element of the array;
console.log(arrpop); // Only its return the last element of the array;
console.log(arr)// after removed the last element its return the pending elements;

// 3. Shift Method:
// The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value.

let Method = [ "Varun","Muthu","banana","apple","orange"];
let Combinedarr = Method.shift();// shift method removing the first element of the array;
console.log(Combinedarr);// In this console only returns the first element which we removed the shift method.
console.log(Method);// after removed the first mnethod its return the pending elements;

// 4. Unshift Method;
// The unshift() method adds new elements to the beginning of an array. The unshift() method overwrites the original array.

let firstarray = ["Muthu", 2,"kishnan",8]
firstarray.unshift("Selvaraj");// unshift method add the first index of the arrray;
console.log(firstarray);// In the console return the all the data.

// 5.Splice Method
//splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index.

let arr2 = [1,2,4,5,6,7,8,9,10];
let removedarr = arr2.splice(2);// It remove the elements from the 2nd index;
console.log(removedarr)// it removed the elements from the 2nd index;
arr2.splice(2,0,"Muthu");// It add the value of the 2nd the index;
console.log(arr2)// it print the total array which includes the add value also.

// 6. slice Method;
// The slice() method returns selected elements in an array, as a new array.

let arr3 = [1,2,3,4,5];
let newarr = arr3.slice(4);// The slice method remove the what we are giving the specified index it will be return the new array;
console.log(newarr);// Its print the new array;

// 7. concat Method;
//The concat() method concatenates (joins) two or more arrays.

let arr4 = [1,2,3,4,5];
let arr5 = [6,7,8,9,10];
let Combinedarr2 = arr4.concat(arr5);// the concat will combined the array 
console.log(Combinedarr2)

// 8.forEach method;
// The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array.

let arr6 = [1,2,3,4,5];

arr6.forEach(element=>{
    console.log(element * 2);
})

